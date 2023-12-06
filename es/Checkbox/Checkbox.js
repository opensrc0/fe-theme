"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _fontColorConst = _interopRequireDefault(require("../theme/font/fontColorConst"));
var _fontWeightConst = _interopRequireDefault(require("../theme/font/fontWeightConst"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var CheckboxWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Checkbox__CheckboxWrapper",
  componentId: "sc-1l9af7g-0"
})(["width:auto;padding:0;padding-left:0;margin:0;margin-bottom:0;display:inline-block;"]);
var CheckboxLabel = _styledComponents["default"].label.withConfig({
  displayName: "Checkbox__CheckboxLabel",
  componentId: "sc-1l9af7g-1"
})(["margin:0;font-size:14px;width:auto;padding-left:30px;position:relative;cursor:pointer;font-weight:400;line-height:16px;display:inline-block;outline:none;@media (max-width:767px){font-size:13px;}"]);
var CheckboxText = _styledComponents["default"].span.withConfig({
  displayName: "Checkbox__CheckboxText",
  componentId: "sc-1l9af7g-2"
})(["color:", ";font-size:14px;line-height:18px;font-weight:", ";font-family:'Open Sans',sans-serif;outline:none;@media (min-width:768px) and (max-width:991px){font-size:13px;}@media (max-width:767px){font-size:13px;}"], function (props) {
  return _fontColorConst["default"][props.checkboxColor];
}, function (props) {
  return _fontWeightConst["default"][props.fontWeight];
});
var CheckboxCheckmark = _styledComponents["default"].span.withConfig({
  displayName: "Checkbox__CheckboxCheckmark",
  componentId: "sc-1l9af7g-3"
})(["background:", ";position:absolute;top:0;left:2px;width:18px;height:18px;outline:none;border:1px solid #cfcfcf;&::after{content:\"\";position:absolute;display:none;left:4px;top:2px;width:5px;height:8px;border:solid white;border-width:0 2px 2px 0;transform:rotate(45deg);}"], _fontColorConst["default"].white);
var CheckboxError = _styledComponents["default"].p.withConfig({
  displayName: "Checkbox__CheckboxError",
  componentId: "sc-1l9af7g-4"
})(["font-size:12px;line-height:14px;font-weight:500;color:", ";margin-top:6px;margin-bottom:6px;padding-left:4px;"], _fontColorConst["default"].danger);
var CheckboxInput = _styledComponents["default"].input.withConfig({
  displayName: "Checkbox__CheckboxInput",
  componentId: "sc-1l9af7g-5"
})(["color:black;font-size:16px;font-weight:400;font-family:'Open Sans',sans-serif;display:inline-block;border:none;border-bottom:1px solid #cfcfcf;background-color:transparent;padding-left:20px;outline:none;box-shadow:none;position:absolute;opacity:0;cursor:pointer;left:0;height:100%;margin:0;line-height:normal;&:checked ~ ", "{&::before{display:block;}&::after{display:block;left:4px;top:1px;width:5px;height:10px;}}&:checked ~ ", "{background-color:", ";border:1px solid ", ";}", " &:disabled ~ ", "{background:", ";cursor:not-allowed;}"], CheckboxCheckmark, CheckboxCheckmark, _fontColorConst["default"].blackLight, _fontColorConst["default"].blackLight, function (props) {
  return [props.theme === 'secondary' && (0, _styledComponents.css)(["&:checked ~ ", "{background-color:", ";border:1px solid ", ";}"], CheckboxCheckmark, _fontColorConst["default"].darkBlue, _fontColorConst["default"].darkBlue), props.theme === 'success' && (0, _styledComponents.css)(["&:checked ~ ", "{background-color:", ";border:1px solid ", ";}"], CheckboxCheckmark, _fontColorConst["default"].green, _fontColorConst["default"].green), props.theme === 'primary' && (0, _styledComponents.css)(["&:checked ~ ", "{background-color:", ";border:1px solid ", ";}"], CheckboxCheckmark, _fontColorConst["default"].red, _fontColorConst["default"].red), props.theme === 'primary' && (0, _styledComponents.css)(["&:checked ~ ", "{background-color:", ";border:1px solid ", ";}"], CheckboxCheckmark, _fontColorConst["default"].red, _fontColorConst["default"].red)];
}, CheckboxCheckmark, _fontColorConst["default"].gray3);
function Checkbox(_ref) {
  var children = _ref.children,
    id = _ref.id,
    name = _ref.name,
    refCallBack = _ref.refCallBack,
    checked = _ref.checked,
    theme = _ref.theme,
    weight = _ref.fontWeight,
    _ref$classes = _ref.classes,
    rootCls = _ref$classes.root,
    labelCls = _ref$classes.label,
    inputCls = _ref$classes.input,
    textCls = _ref$classes.text,
    checkmarkCls = _ref$classes.checkmark,
    errorCls = _ref$classes.error,
    isDisabled = _ref.isDisabled,
    errorText = _ref.errorText,
    onChange = _ref.onChange,
    onClick = _ref.onClick;
  var defaultInputProps = {
    type: 'checkbox',
    ref: refCallBack,
    onChange: onChange,
    onClick: onClick,
    id: id,
    name: name,
    checked: checked
  };
  return /*#__PURE__*/_react["default"].createElement(CheckboxWrapper, {
    className: (0, _bind["default"])(rootCls)
  }, /*#__PURE__*/_react["default"].createElement(CheckboxLabel, {
    htmlFor: id,
    className: (0, _bind["default"])(labelCls)
  }, /*#__PURE__*/_react["default"].createElement(CheckboxInput, (0, _extends2["default"])({
    theme: theme,
    className: (0, _bind["default"])(inputCls)
  }, defaultInputProps, {
    disabled: isDisabled
  })), /*#__PURE__*/_react["default"].createElement(CheckboxText, {
    fontWeight: weight,
    className: (0, _bind["default"])(textCls)
  }, children), /*#__PURE__*/_react["default"].createElement(CheckboxCheckmark, {
    className: (0, _bind["default"])(checkmarkCls)
  })), errorText ? /*#__PURE__*/_react["default"].createElement(CheckboxError, {
    className: (0, _bind["default"])(errorCls)
  }, errorText) : null);
}
Checkbox.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].array]),
  fontWeight: _propTypes["default"].oneOf(Object.keys(_fontWeightConst["default"])),
  id: _propTypes["default"].string.isRequired,
  name: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  refCallBack: _propTypes["default"].func,
  classes: _propTypes["default"].object,
  isDisabled: _propTypes["default"].bool,
  errorText: _propTypes["default"].string,
  checkboxColor: _propTypes["default"].string,
  checked: _propTypes["default"].bool,
  theme: _propTypes["default"].oneOf(['primary', 'secondary', 'success', 'default'])
};
Checkbox.defaultProps = {
  onClick: function onClick() {},
  onChange: function onChange() {},
  refCallBack: function refCallBack() {},
  classes: {},
  name: '',
  theme: 'secondary',
  isDisabled: false,
  errorText: '',
  checked: false,
  children: null,
  checkboxColor: 'black',
  fontWeight: 'bold'
};
var _default = exports["default"] = Checkbox;