import { buttonVariant, buttonOutlineVariant, buttonSize } from '../mixins/button';
import { transition } from '../mixins/transition';
import { tabFocus } from '../mixins/tab-focus';
import { hover, hoverFocus } from '../mixins/hover';
import { boxShadow } from '../mixins/box-shadow';

export var defaultProps = {
  '$enable-shadows': true,
  '$enable-hover-media-query': false,
  '$enable-transitions': false,
  '$enable-rounded': true,
  '$btn-font-weight': 'normal',
  '$btn-line-height': '1.25',
  '$input-btn-border-width': '1px',
  '$btn-padding-x': '1rem',
  '$btn-padding-y': '.5rem',
  '$font-size-base': '1rem',
  '$btn-border-radius': '.25rem',
  '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0,0,0,.125)',
  '$cursor-disabled': 'not-allowed',
  '$link-color': '#0275d8',
  '$link-hover-color': '#014C8D',
  '$link-hover-decoration': 'underline',
  '$btn-link-disabled-color': '#818a91',
  '$btn-padding-x-lg': '1.5rem',
  '$btn-padding-y-lg': '.75rem',
  '$font-size-lg': '1.25rem',
  '$btn-border-radius-lg': '.3rem',
  '$btn-padding-x-sm': '.5rem',
  '$btn-padding-y-sm': '.25rem',
  '$font-size-sm': '.875rem',
  '$btn-border-radius-sm': '.2rem',
  '$btn-block-spacing-y': '.5rem',
  '$btn-primary-color': '#fff',
  '$btn-primary-bg': '#0275d8',
  '$btn-primary-border': '#0275d8',
  '$btn-secondary-color': '#373a3c',
  '$btn-secondary-bg': '#fff',
  '$btn-secondary-border': '#ccc',
  '$btn-info-color': '#fff',
  '$btn-info-bg': '#5bc0de',
  '$btn-info-border': '#5bc0de',
  '$btn-success-color': '#fff',
  '$btn-success-bg': '#5cb85c',
  '$btn-success-border': '#5cb85c',
  '$btn-warning-color': '#fff',
  '$btn-warning-bg': '#f0ad4e',
  '$btn-warning-border': '#f0ad4e',
  '$btn-danger-color': '#fff',
  '$btn-danger-bg': '#d9534f',
  '$btn-danger-border': '#d9534f'
};

export function button() {
  var $enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-hover-media-query'];
  var $enableTransitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$enable-transitions'];
  var $enableRounded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$enable-rounded'];
  var $btnFontWeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$btn-font-weight'];
  var $btnLineHeight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$btn-line-height'];
  var $inputBtnBorderWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$input-btn-border-width'];
  var $btnPaddingX = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$btn-padding-x'];
  var $btnPaddingY = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$btn-padding-y'];
  var $fontSizeBase = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$font-size-base'];
  var $btnBorderRadius = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$btn-border-radius'];
  var $btnActiveBoxShadow = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$btn-active-box-shadow'];
  var $cursorDisabled = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$cursor-disabled'];
  var $linkColor = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$link-color'];
  var $linkHoverColor = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$link-hover-color'];
  var $linkHoverDecoration = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$link-hover-decoration'];
  var $btnLinkDisabledColor = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$btn-link-disabled-color'];
  var $btnPaddingXLg = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$btn-padding-x-lg'];
  var $btnPaddingYLg = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$btn-padding-y-lg'];
  var $fontSizeLg = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$font-size-lg'];
  var $btnBorderRadiusLg = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$btn-border-radius-lg'];
  var $btnPaddingXSm = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$btn-padding-x-sm'];
  var $btnPaddingYSm = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$btn-padding-y-sm'];
  var $fontSizeSm = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$font-size-sm'];
  var $btnBorderRadiusSm = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$btn-border-radius-sm'];
  var $btnBlockSpacingY = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps['$btn-block-spacing-y'];
  var $btnPrimaryColor = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps['$btn-primary-color'];
  var $btnPrimaryBg = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps['$btn-primary-bg'];
  var $btnPrimaryBorder = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps['$btn-primary-border'];
  var $btnSecondaryColor = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps['$btn-secondary-color'];
  var $btnSecondaryBg = arguments.length > 30 && arguments[30] !== undefined ? arguments[30] : defaultProps['$btn-secondary-bg'];
  var $btnSecondaryBorder = arguments.length > 31 && arguments[31] !== undefined ? arguments[31] : defaultProps['$btn-secondary-border'];
  var $btnInfoColor = arguments.length > 32 && arguments[32] !== undefined ? arguments[32] : defaultProps['$btn-info-color'];
  var $btnInfoBg = arguments.length > 33 && arguments[33] !== undefined ? arguments[33] : defaultProps['$btn-info-bg'];
  var $btnInfoBorder = arguments.length > 34 && arguments[34] !== undefined ? arguments[34] : defaultProps['$btn-info-border'];
  var $btnSuccessColor = arguments.length > 35 && arguments[35] !== undefined ? arguments[35] : defaultProps['$btn-success-color'];
  var $btnSuccessBg = arguments.length > 36 && arguments[36] !== undefined ? arguments[36] : defaultProps['$btn-success-bg'];
  var $btnSuccessBorder = arguments.length > 37 && arguments[37] !== undefined ? arguments[37] : defaultProps['$btn-success-border'];
  var $btnWarningColor = arguments.length > 38 && arguments[38] !== undefined ? arguments[38] : defaultProps['$btn-warning-color'];
  var $btnWarningBg = arguments.length > 39 && arguments[39] !== undefined ? arguments[39] : defaultProps['$btn-warning-bg'];
  var $btnWarningBorder = arguments.length > 40 && arguments[40] !== undefined ? arguments[40] : defaultProps['$btn-warning-border'];
  var $btnDangerColor = arguments.length > 41 && arguments[41] !== undefined ? arguments[41] : defaultProps['$btn-danger-color'];
  var $btnDangerBg = arguments.length > 42 && arguments[42] !== undefined ? arguments[42] : defaultProps['$btn-danger-bg'];
  var $btnDangerBorder = arguments.length > 43 && arguments[43] !== undefined ? arguments[43] : defaultProps['$btn-danger-border'];

  return '\n/*\n     Base styles\n    */\n    font-family: inherit;\n\n    &.btn{\n      /* Adapt the colors based on primary prop */\n      display: inline-block;\n      font-weight: ' + $btnFontWeight + ';\n      line-height: ' + $btnLineHeight + ';\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      cursor: pointer;\n      user-select: none;\n      border: ' + $inputBtnBorderWidth + ' solid transparent;\n      ' + buttonSize($enableRounded, $btnPaddingY, $btnPaddingX, $fontSizeBase, $btnBorderRadius) + ';\n      ' + transition($enableTransitions, 'all .2s ease-in-out') + ';\n     \n      &,\n      &:active,\n      &.active {\n        &:focus,\n        &.focus {\n          ' + tabFocus() + ';\n        }\n      }\n     \n      ' + hoverFocus($enableHoverMediaQuery, 'text-decoration: none;\n            &.focus {\n              text-decoration: none;\n            }') + ';\n     \n      &:active,\n      &.active {\n        background-image: none;\n        outline: 0;\n        ' + boxShadow($enableShadows, $btnActiveBoxShadow) + '\n      }\n     \n      &.disabled,\n      &:disabled {\n        cursor: ' + $cursorDisabled + ';\n        opacity: .65;\n        ' + boxShadow($enableShadows, 'none') + ';\n      }\n    }   \n \n    /* Future-proof disabling of clicks on a elements */\n    a.btn.disabled,\n    fieldset[disabled] a.btn {\n      pointer-events: none;\n    }\n   \n   \n    /* Alternate buttons */\n   \n    &.btn-primary{\n      ' + buttonVariant($enableHoverMediaQuery, $btnPrimaryColor, $btnPrimaryBg, $btnPrimaryBorder) + '\n    }\n    &.btn-secondary{\n      ' + buttonVariant($enableHoverMediaQuery, $btnSecondaryColor, $btnSecondaryBg, $btnSecondaryBorder) + '\n    }\n    &.btn-info{\n      ' + buttonVariant($enableHoverMediaQuery, $btnInfoColor, $btnInfoBg, $btnInfoBorder) + '\n    }\n    &.btn-success{\n      ' + buttonVariant($enableHoverMediaQuery, $btnSuccessColor, $btnSuccessBg, $btnSuccessBorder) + '\n    }\n    &.btn-warning{\n      ' + buttonVariant($enableHoverMediaQuery, $btnWarningColor, $btnWarningBg, $btnWarningBorder) + '\n    }\n    &.btn-danger{\n      ' + buttonVariant($enableHoverMediaQuery, $btnDangerColor, $btnDangerBg, $btnDangerBorder) + '\n    }\n   \n   /* Remove all backgrounds */\n\n    &.btn-outline-primary{\n      ' + buttonOutlineVariant($btnPrimaryBg) + ';\n    }    \n    &.btn-outline-secondary{\n      ' + buttonOutlineVariant($btnSecondaryBorder) + ';\n    }    \n    &.btn-outline-info{\n      ' + buttonOutlineVariant($btnInfoBg) + ';\n    }    \n    &.btn-outline-success{\n      ' + buttonOutlineVariant($btnSuccessBg) + ';\n    }    \n    &.btn-outline-warning{\n      ' + buttonOutlineVariant($btnWarningBg) + ';\n    }\n    &.btn-outline-danger{\n      ' + buttonOutlineVariant($btnDangerBg) + ';\n    }\n   \n    /*\n     Link buttons\n    */\n   \n    /* Make a button look and behave like a link */\n    &.btn-link {\n      font-weight: normal;\n      color: ' + $linkColor + ';\n      border-radius: 0;\n   \n      &,\n      &:active,\n      &.active,\n      &:disabled {\n        background-color: transparent;\n        ' + boxShadow($enableShadows, 'none') + ';\n      }\n     \n      &,\n      &:focus,\n      &:active {\n        border-color: transparent;\n      }\n     \n      ' + hover('\n        border-color: transparent;\n      ') + ';\n     \n      ' + hoverFocus($enableHoverMediaQuery, 'color: ' + $linkHoverColor + ';\n        text-decoration: ' + $linkHoverDecoration + ';\n        background-color: transparent;') + ';\n     \n      &:disabled {\n        ' + hoverFocus($enableHoverMediaQuery, 'color: ' + $btnLinkDisabledColor + ';\n                text-decoration: none;') + ';\n      }\n    }\n   \n    /*\n     Button Sizes\n    */\n   \n    &.btn-lg {\n      /* line-height: ensure even-numbered height of button next to large input */\n      ' + buttonSize($enableRounded, $btnPaddingYLg, $btnPaddingXLg, $fontSizeLg, $btnBorderRadiusLg) + ';\n    }\n   \n    &.btn-sm {\n      /* line-height: ensure proper height of button next to small input */\n      ' + buttonSize($enableRounded, $btnPaddingYSm, $btnPaddingXSm, $fontSizeSm, $btnBorderRadiusSm) + ';\n    }\n   \n   \n    /*\n     Block button\n    */\n   \n    &.btn-block {\n      display: block;\n      width: 100%;\n    }\n   \n    /*  Vertically space out multiple block buttons */\n    &.btn-block + .btn-block {\n      margin-top: ' + $btnBlockSpacingY + ';\n    }\n   \n    /*  Specificity overrides */\n    input[type=\'submit\'],\n    input[type=\'reset\'],\n    input[type=\'button\'] {\n      &.btn-block {\n        width: 100%;\n      }\n    }\n   \n    /* Reboot Scss */\n    touch-action: manipulation;\n    /* Normalize includes \'font: inherit;\', so \'font-family\'. \'font-size\', etc are */\n    /* properly inherited. However, \'line-height\' isn\'t inherited there. */\n    line-height: inherit;\n    &:focus{\n      outline: 1px dotted;\n      outline: 5px auto -webkit-focus-ring-color;\n    }\n    &[type="radio"],\n    &[type="checkbox"] {\n    /*\n     Apply a disabled cursor for radios and checkboxes.\n     Note: Neither radios nor checkboxes can be readonly.\n    */\n   \n      &:disabled {\n        cursor: ' + $cursorDisabled + ';\n      }\n    }\n  ';
}

export default {
  defaultProps: defaultProps,
  button: button
};