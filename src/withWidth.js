import React from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import debounce from 'debounce'; // < 1kb payload overhead when lodash/debounce is > 3kb.
import hoistNonReactStatics from 'hoist-non-react-statics';
import { withTheme } from 'styled-components';
import getDisplayName from './utils/getDisplayName';

/* eslint-disable react/destructuring-assignment */
// By default, returns true if screen width is the same or greater than the given breakpoint.
export const isWidthUp = (gridBreakpoints, breakpoint, width, inclusive = true) => {
  const breakpointKeys = Object.keys(gridBreakpoints);
  if (inclusive) {
    return breakpointKeys.indexOf(breakpoint) <= breakpointKeys.indexOf(width);
  }
  return breakpointKeys.indexOf(breakpoint) < breakpointKeys.indexOf(width);
};

// By default, returns true if screen width is the same or less than the given breakpoint.
export const isWidthDown = (gridBreakpoints, breakpoint, width, inclusive = true) => {
  const breakpointKeys = Object.keys(gridBreakpoints);
  if (inclusive) {
    return breakpointKeys.indexOf(width) <= breakpointKeys.indexOf(breakpoint);
  }
  return breakpointKeys.indexOf(width) < breakpointKeys.indexOf(breakpoint);
};

const withWidth = (options = {}) => (Component) => {
  const {
    withTheme: withThemeOption = false,
    noSSR = false,
    initialWidth: initialWidthOption,
    logging = false,
    resizeInterval = 166, // Corresponds to 10 frames at 60 Hz.
  } = options;

  class WithWidth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        width: noSSR ? this.getWidth() : undefined,
      };

      if (typeof window !== 'undefined') {
        this.handleResize = debounce(() => {
          const width2 = this.getWidth();
          if (width2 !== this.state.width) {
            this.setState({
              width: width2,
            });
          }
        }, resizeInterval);
      }
    }

    componentDidMount() {
      const width = this.getWidth();
      if (width !== this.state.width) {
        this.setState({
          width,
        });
      }
    }

    componentWillUnmount() {
      this.handleResize.clear();
    }

    getWidth(innerWidth = window.innerWidth) {
      const breakpoints = this.props.theme['$grid-breakpoints'];

      const breakpointKeys = Object.keys(breakpoints);
      let width = null;

      /**
       * Start with the slowest value as low end devices often have a small screen.
       *
       * innerWidth |xs      sm      md      lg      xl      xxl
       *            |-------|-------|-------|-------|------|------>
       * width      |  xs   |  sm   |  md   |  lg   |  xl  |  xxl
       */
      let index = 1;
      while (width === null && index < breakpointKeys.length) {
        const currentWidth = breakpointKeys[index];

        // @media are inclusive, so reproduce the behavior here.
        if (innerWidth < parseFloat(breakpoints[currentWidth])) {
          width = breakpointKeys[index - 1];
          break;
        }

        index += 1;
      }

      width = width || 'xl';
      return width;
    }

    render() {
      const {
        initialWidth,
        theme,
        width,
        ...other
      } = this.props;

      const more = {
        width: width || this.state.width || initialWidth || initialWidthOption,
        ...other,
      };

      // When rendering the component on the server,
      // we have no idea about the client browser screen width.
      // In order to prevent blinks and help the reconciliation of the React tree
      // we are not rendering the child component.
      //
      // An alternative is to use the `initialWidth` property.
      if (more.width === undefined) {
        return null;
      }

      if (withThemeOption) {
        more.theme = theme;
      }

      if (logging) {
        console.log(`widthWidth: [bp=${more.width}][width=${window.innerWidth}px]`); // eslint-disable-line no-console
      }

      return (
        <React.Fragment>
          <Component {...more} />
          <EventListener target="window" onResize={this.handleResize} />
        </React.Fragment>
      );
    }
  }

  WithWidth.propTypes = {
    /**
     * As `window.innerWidth` is unavailable on the server,
     * we default to rendering an empty component during the first mount.
     * In some situation, you might want to use an heuristic to approximate
     * the screen width of the client browser screen width.
     *
     * For instance, you could be using the user-agent or the client-hints.
     * https://caniuse.com/#search=client%20hint
     */
    initialWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
    /**
     * @ignore
     */
    theme: PropTypes.object.isRequired,
    /**
     * Bypass the width calculation logic.
     */
    width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  };

  if (process.env.NODE_ENV !== 'production') {
    WithWidth.displayName = `WithWidth(${getDisplayName(Component)})`;
  }

  hoistNonReactStatics(WithWidth, Component);

  return withTheme(WithWidth);
};

export default withWidth;
