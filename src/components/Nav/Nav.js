/**
 * Nav Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import bsTheme from 'theme';
import cn from 'classnames';
import { nav } from '../../styled/mixins/nav';
import { navbar as navbarMixin } from '../../styled/mixins/navbar';
import { mapToCssModules } from '../../styled/utilities/tools';


const defaultProps = {
  theme: bsTheme,
  tag: 'ul',
};

class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    cssModule: PropTypes.object,
    theme: PropTypes.object,
    inline: PropTypes.bool,
    disabled: PropTypes.bool,
    tabs: PropTypes.bool,
    pills: PropTypes.bool,
    stacked: PropTypes.bool,
    navbar: PropTypes.bool,
  }

  render() {
    const {
      className,
      cssModule,
      tabs,
      pills,
      inline,
      stacked,
      navbar,
      tag: Tag,
      theme,  // eslint-disable-line
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      navbar ? 'navbar-nav' : 'nav',
      {
        'nav-tabs': tabs,
        'nav-pills': pills,
        'nav-inline': inline,
        'nav-stacked': stacked,
        disabled: attributes.disabled,
      }
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}


// eslint-disable-next-line no-class-assign
Nav = styled(Nav)`
  ${(props) => `
    ${nav(
      props.theme['$enable-rounded'],
      props.theme['$enable-hover-media-query'],
      props.theme['$nav-link-padding'],
      props.theme['$nav-disabled-link-color'],
      props.theme['$cursor-disabled'],
      props.theme['$nav-tabs-border-width'],
      props.theme['$nav-tabs-border-color'],
      props.theme['$nav-tabs-border-radius'],
      props.theme['$nav-tabs-link-hover-border-color'],
      props.theme['$nav-tabs-active-link-hover-color'],
      props.theme['$nav-tabs-active-link-hover-bg'],
      props.theme['$nav-tabs-active-link-hover-border-color'],
      props.theme['$nav-pills-border-radius'],
      props.theme['$nav-pills-active-link-color'],
      props.theme['$nav-pills-active-link-bg'],
    )}
    
    ${navbarMixin(
      props.theme['$grid-breakpoints'],
      props.theme['$enable-rounded'],
      props.theme['$enable-hover-media-query'],
      props.theme['$navbar-padding-y'],
      props.theme['$navbar-padding-x'],
      props.theme['$zindex-navbar'],
      props.theme['$zindex-navbar-fixed'],
      props.theme['$zindex-navbar-sticky'],
      props.theme['$navbar-brand-padding-y'],
      props.theme['$font-size-lg'],
      props.theme['$navbar-divider-padding-y'],
      props.theme['$navbar-toggler-padding-y'],
      props.theme['$navbar-toggler-padding-x'],
      props.theme['$navbar-toggler-font-size'],
      props.theme['$border-width'],
      props.theme['$navbar-toggler-border-radius'],
      props.theme['$navbar-light-active-color'],
      props.theme['$navbar-light-color'],
      props.theme['$navbar-light-hover-color'],
      props.theme['$navbar-light-toggler-border'],
      props.theme['$navbar-light-disabled-color'],
      props.theme['$navbar-light-toggler-bg'],
      props.theme['$navbar-inverse-active-color'],
      props.theme['$navbar-inverse-color'],
      props.theme['$navbar-inverse-hover-color'],
      props.theme['$navbar-inverse-toggler-border'],
      props.theme['$navbar-inverse-toggler-bg'],
      props.theme['$navbar-inverse-disabled-color'],
    )}
  `}
`;

Nav.defaultProps = defaultProps;

export default Nav;
