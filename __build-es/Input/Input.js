"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InputIcon = exports.InputField = exports.InputBox = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _theme = _interopRequireDefault(require("../component/theme"));
var _constants = require("../component/utils/constants");
var _fontColorConst = _interopRequireDefault(require("../component/theme/font/fontColorConst"));
var _Image = _interopRequireDefault(require("../WIP-Image/Image"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var InputWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Input__InputWrapper",
  componentId: "sc-vnh81w-0"
})(["width:100%;"]);
var InputLabel = _styledComponents["default"].div.withConfig({
  displayName: "Input__InputLabel",
  componentId: "sc-vnh81w-1"
})(["background-color:transparent;top:", ";box-sizing:border-box;color:", ";font-size:", ";font-family:roboto,arial,sans-serif;font-weight:400;line-height:16px;left:10px;max-width:calc(100% - (2 * 8px));overflow:hidden;padding:0 8px;text-overflow:ellipsis;transition:transform 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);white-space:nowrap;width:auto;z-index:1;pointer-events:none;position:absolute;", " @media (min-width:768px) and (max-width:991px){font-size:", ";}@media (max-width:767px){font-size:13px;}"], function (props) {
  return props.small ? '11px' : '14px';
}, _fontColorConst["default"].gray10, function (props) {
  return props.small ? '13px' : '15px';
}, function (props) {
  return [props.placeholder && (0, _styledComponents.css)(["transform:", ";font-size:12px;line-height:12px;color:", ";background-color:", ";@media (max-width:767px){background-color:", ";}"], props.small ? 'translateY(-140%)' : 'translateY(-155%)', _fontColorConst["default"].link, props.backgroundColor ? props.theme.color[props.backgroundColor] : _fontColorConst["default"].white, props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : _fontColorConst["default"].white)];
}, function (props) {
  return props.small ? '13px' : '14px';
});
var InputField = exports.InputField = _styledComponents["default"].input.withConfig({
  displayName: "Input__InputField",
  componentId: "sc-vnh81w-2"
})(["width:100%;flex-grow:1;flex-shrink:1;border:1px solid ", ";background-color:transparent;display:block;font-family:'Open Sans',sans-serif;line-height:26px;outline:none;border-radius:3px;color:", ";font-size:", ";height:", ";padding:8px 16px;z-index:1;@media (max-width:767px){font-size:13px;}&:disabled{color:", ";border:1px solid ", ";opacity:0.8;cursor:not-allowed;}&:read-only{color:", ";cursor:not-allowed;}&:-webkit-autofill,&:-webkit-autofill:focus,&:-webkit-autofill:hover{background-color:transparent;font-size:", ";transition:background-color 5000s ease-in-out 0s;@media (max-width:767px){font-size:13px;}}&:not([disabled]):focus{border:1px solid ", ";}&:not([disabled]):focus ~ ", "{transform:", ";font-size:12px;line-height:12px;color:", ";background-color:", ";@media (max-width:767px){background-color:", ";}}&:-webkit-autofill ~ ", "{transform:", ";font-size:12px;line-height:12px;color:", ";background-color:", ";@media (max-width:767px){background-color:", ";}}&:disabled ~ ", "{background-color:transparent;color:", ";}"], _fontColorConst["default"].gray9, _fontColorConst["default"].black1, function (props) {
  return props.small ? '14px' : '15px';
}, function (props) {
  return props.small ? '36px' : '42px';
}, _fontColorConst["default"].gray11, _fontColorConst["default"].gray18, _fontColorConst["default"].gray11, function (props) {
  return props.small ? '14px' : '15px';
}, _fontColorConst["default"].link, InputLabel, function (props) {
  return props.small ? 'translateY(-140%)' : 'translateY(-155%)';
}, _fontColorConst["default"].link, function (props) {
  return props.backgroundColor ? props.theme.color[props.backgroundColor] : _fontColorConst["default"].white;
}, function (props) {
  return props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : _fontColorConst["default"].white;
}, InputLabel, function (props) {
  return props.small ? 'translateY(-140%)' : 'translateY(-155%)';
}, _fontColorConst["default"].link, function (props) {
  return props.backgroundColor ? props.theme.color[props.backgroundColor] : _fontColorConst["default"].white;
}, function (props) {
  return props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : _fontColorConst["default"].white;
}, InputLabel, _fontColorConst["default"].gray11);
var InputBox = exports.InputBox = _styledComponents["default"].div.withConfig({
  displayName: "Input__InputBox",
  componentId: "sc-vnh81w-3"
})(["position:relative;margin-top:", ";display:flex;flex-grow:1;flex-shrink:1;", " &.errorBox{", "{border:1px solid ", ";&:disabled ~ ", "{transform:", ";font-size:12px;line-height:12px;color:", ";background-color:", ";@media (max-width:767px){background-color:", ";}}&:not([disabled]):focus ~ ", "{transform:", ";font-size:12px;line-height:12px;background-color:", ";color:", ";@media (max-width:767px){background-color:", ";}}}", "{transform:", ";font-size:12px;line-height:12px;background-color:", ";color:", ";@media (max-width:767px){background-color:", ";}}}"], function (props) {
  return "".concat(props.theme.px(props.marginTop));
}, function (props) {
  return [props.isValue && (0, _styledComponents.css)(["", "{transform:", ";font-size:12px;line-height:12px;color:", ";background-color:", ";@media (max-width:767px){background-color:", ";}}", "{border:1px solid ", ";}", ":disabled{border:1px solid ", ";}& ", ":disabled ~ ", "{background-color:", ";color:", ";@media (max-width:767px){background-color:", ";}}"], InputLabel, props.small ? 'translateY(-140%)' : 'translateY(-155%)', _fontColorConst["default"].link, props.backgroundColor ? props.theme.color[props.backgroundColor] : _fontColorConst["default"].white, props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : _fontColorConst["default"].white, InputField, _fontColorConst["default"].link, InputField, _fontColorConst["default"].gray9, InputField, InputLabel, props.backgroundColor ? props.theme.color[props.backgroundColor] : _fontColorConst["default"].white, _fontColorConst["default"].gray10, props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : _fontColorConst["default"].white)];
}, InputField, _fontColorConst["default"].danger, InputLabel, function (props) {
  return props.small ? 'translateY(-140%)' : 'translateY(-155%)';
}, _fontColorConst["default"].danger, function (props) {
  return props.backgroundColor ? props.theme.color[props.backgroundColor] : _fontColorConst["default"].white;
}, function (props) {
  return props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : _fontColorConst["default"].white;
}, InputLabel, function (props) {
  return props.small ? 'translateY(-140%)' : 'translateY(-155%)';
}, function (props) {
  return props.backgroundColor ? props.theme.color[props.backgroundColor] : _fontColorConst["default"].white;
}, _fontColorConst["default"].danger, function (props) {
  return props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : _fontColorConst["default"].white;
}, InputLabel, function (props) {
  return props.small ? 'translateY(-140%)' : 'translateY(-155%)';
}, function (props) {
  return props.backgroundColor ? props.theme.color[props.backgroundColor] : _fontColorConst["default"].white;
}, _fontColorConst["default"].danger, function (props) {
  return props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : _fontColorConst["default"].white;
});
var InputIconWrapper = _styledComponents["default"].span.withConfig({
  displayName: "Input__InputIconWrapper",
  componentId: "sc-vnh81w-4"
})(["position:absolute;right:0;cursor:pointer;display:flex;height:100%;align-items:center;z-index:11;"]);
var InputIcon = exports.InputIcon = _styledComponents["default"].button.withConfig({
  displayName: "Input__InputIcon",
  componentId: "sc-vnh81w-5"
})(["outline:none;border:none;cursor:pointer;background:transparent;& i{font-size:16px;color:", ";vertical-align:middle;}& img{height:25px;vertical-align:middle;}&.disabled,&[disabled]{cursor:not-allowed;filter:alpha(opacity=65);box-shadow:none;opacity:0.65;}"], _fontColorConst["default"].blackLight);
var Error = _styledComponents["default"].div.withConfig({
  displayName: "Input__Error",
  componentId: "sc-vnh81w-6"
})(["font-size:12px;line-height:14px;font-weight:500;color:", ";margin-top:6px;margin-bottom:0;padding-left:4px;"], _fontColorConst["default"].danger);
function Input(_ref) {
  var id = _ref.id,
    _ref$classes = _ref.classes,
    rootCls = _ref$classes.root,
    inputCls = _ref$classes.input,
    iconCls = _ref$classes.icon,
    labelCls = _ref$classes.label,
    errorCls = _ref$classes.error,
    type = _ref.type,
    label = _ref.label,
    name = _ref.name,
    size = _ref.size,
    placeholder = _ref.placeholder,
    refCallBack = _ref.refCallBack,
    value = _ref.value,
    key = _ref.key,
    readOnly = _ref.readOnly,
    autoFocus = _ref.autoFocus,
    ariaRequired = _ref.ariaRequired,
    required = _ref.required,
    disableAutoComplete = _ref.disableAutoComplete,
    onCopy = _ref.onCopy,
    onPaste = _ref.onPaste,
    onCut = _ref.onCut,
    errorText = _ref.errorText,
    inputIcon = _ref.inputIcon,
    inputImage = _ref.inputImage,
    onChange = _ref.onChange,
    onKeyPress = _ref.onKeyPress,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    onIconClick = _ref.onIconClick,
    onKeyUp = _ref.onKeyUp,
    isDisabled = _ref.isDisabled,
    backgroundColor = _ref.backgroundColor,
    backgroundColorXS = _ref.backgroundColorXS,
    marginTop = _ref.marginTop,
    small = _ref.small,
    ccNumber = _ref.ccNumber,
    maxLength = _ref.maxLength;
  var handleChange = function handleChange(event) {
    if (event && event.target) {
      var val = event.target.value;
      if (val && _constants.HTML_TAG_REGEX.test(val)) {
        alert('HTML Tag are not allowed');
      } else {
        onChange(event);
      }
    }
  };
  var handleKeyPress = function handleKeyPress(event) {
    if (event) {
      onKeyPress(event);
    }
  };
  var handleFocus = function handleFocus(event) {
    if (typeof onFocus === 'function') {
      onFocus(event);
    }
  };
  var handleBlur = function handleBlur(event) {
    if (typeof onBlur === 'function') {
      var val = event.target.value;
      if (val && _constants.HTML_TAG_REGEX.test(val)) {
        alert('HTML Tag are not allowed');
      } else {
        onBlur(event);
      }
    }
  };
  var handleIconClick = function handleIconClick() {
    if (typeof onIconClick === 'function') {
      onIconClick();
    }
  };
  var handleKeyUp = function handleKeyUp(event) {
    if (event) {
      onKeyUp(event);
    }
  };
  var opts = {};
  opts.readOnly = readOnly;
  /* istanbul ignore next */
  if (autoFocus) {
    opts.autofocus = autoFocus;
  }
  opts['aria-required'] = ariaRequired;
  opts['area-lable'] = label || '';
  opts.required = required;
  opts.value = value;
  opts.maxLength = maxLength || '';
  opts['cc-number'] = ccNumber || '';
  if (disableAutoComplete) {
    opts.autoComplete = 'off';
    opts.autoCorrect = 'off';
    opts.autoCapitalize = 'off';
    opts.spellCheck = 'off';
  }
  return /*#__PURE__*/_react["default"].createElement(InputWrapper, {
    small: small,
    className: rootCls
  }, /*#__PURE__*/_react["default"].createElement(InputBox, {
    isValue: !!value,
    className: (0, _bind["default"])({
      errorBox: !!errorText
    }),
    backgroundColor: backgroundColor,
    backgroundColorXS: backgroundColorXS,
    marginTop: marginTop,
    small: small
  }, /*#__PURE__*/_react["default"].createElement(InputField, (0, _extends2["default"])({
    id: id,
    className: (0, _bind["default"])(inputCls),
    type: type,
    name: name,
    key: key,
    size: size,
    value: value,
    onChange: handleChange,
    onCopy: onCopy,
    onPaste: onPaste,
    onCut: onCut,
    onKeyPress: handleKeyPress,
    onKeyUp: handleKeyUp,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: refCallBack,
    disabled: isDisabled,
    backgroundColor: backgroundColor,
    backgroundColorXS: backgroundColorXS,
    small: small,
    placeholder: placeholder
  }, opts)), /*#__PURE__*/_react["default"].createElement(InputLabel, {
    className: (0, _bind["default"])(labelCls),
    backgroundColor: backgroundColor,
    backgroundColorXS: backgroundColorXS,
    small: small,
    placeholder: placeholder
  }, label), inputIcon || inputImage ? /*#__PURE__*/_react["default"].createElement(InputIconWrapper, null, /*#__PURE__*/_react["default"].createElement(InputIcon, {
    type: "button",
    disabled: isDisabled,
    className: (0, _bind["default"])(iconCls),
    onClick: function onClick() {
      return handleIconClick();
    }
  }, inputImage ? /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    id: "image-input-info",
    visibleByDefault: true,
    src: inputImage,
    alt: ""
  }) : /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-".concat(inputIcon)
  }))) : null), errorText ? /*#__PURE__*/_react["default"].createElement(Error, {
    small: small,
    className: (0, _bind["default"])(errorCls)
  }, errorText) : null);
}
Input.propTypes = {
  type: _propTypes["default"].string,
  id: _propTypes["default"].string,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  errorText: _propTypes["default"].string,
  name: _propTypes["default"].string,
  size: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  onCopy: _propTypes["default"].func,
  onCut: _propTypes["default"].func,
  onPaste: _propTypes["default"].func,
  onKeyPress: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onIconClick: _propTypes["default"].func,
  readOnly: _propTypes["default"].bool,
  autoFocus: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  ariaRequired: _propTypes["default"].bool,
  refCallBack: _propTypes["default"].func,
  classes: _propTypes["default"].object,
  accepts: _propTypes["default"].string,
  errorStatus: _propTypes["default"].func,
  key: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  dataCsMask: _propTypes["default"].bool,
  datatlPrivate: _propTypes["default"].bool,
  disableAutoComplete: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  inputIcon: _propTypes["default"].string,
  inputImage: _propTypes["default"].string,
  maxLength: _propTypes["default"].string,
  marginTop: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  small: _propTypes["default"].bool,
  ccNumber: _propTypes["default"].bool,
  backgroundColor: _propTypes["default"].oneOf(Object.keys(_theme["default"].color)),
  backgroundColorXS: _propTypes["default"].oneOf(Object.keys(_theme["default"].color))
};
Input.defaultProps = {
  type: 'text',
  size: 20,
  label: '',
  placeholder: '',
  small: false,
  ariaRequired: false,
  required: false,
  readOnly: false,
  autoFocus: false,
  id: '',
  name: '',
  errorText: '',
  onFocus: null,
  onBlur: null,
  onChange: function onChange() {},
  onCopy: function onCopy() {},
  onCut: function onCut() {},
  onPaste: function onPaste() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {},
  refCallBack: function refCallBack() {},
  onIconClick: null,
  classes: {},
  accepts: '',
  errorStatus: function errorStatus() {},
  key: '',
  value: null,
  datatlPrivate: false,
  dataCsMask: false,
  disableAutoComplete: false,
  isDisabled: false,
  inputIcon: '',
  inputImage: '',
  maxLength: '',
  ccNumber: false,
  backgroundColor: 'white',
  backgroundColorXS: 'white',
  marginTop: '20px'
};
var _default = exports["default"] = Input;