import { fromJS } from 'immutable';
import { defaultProps, getTextUtilities } from '../text';

describe('bootstrap text utility', function () {
  it('getTextUtilities should return a list of css utilities', function () {
    var css = getTextUtilities(defaultProps['$enable-hover-media-query'], defaultProps['$grid-breakpoints'], defaultProps['$font-weight-normal'], defaultProps['$font-weight-bold'], defaultProps['$text-muted'], defaultProps['$brand-primary'], defaultProps['$brand-success'], defaultProps['$brand-info'], defaultProps['$brand-warning'], defaultProps['$brand-danger'], defaultProps['$grey-dark']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css: css }).hashCode()).toEqual(866713678);
  });
});