"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RadioWrapper = exports.RadioText = exports.RadioLabel = exports.RadioInput = exports.RadioCheckmark = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _fontColorConst = _interopRequireDefault(require("../component/theme/font/fontColorConst"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var RadioWrapper = exports.RadioWrapper = _styledComponents["default"].div.withConfig({
  displayName: "RadioButton__RadioWrapper",
  componentId: "sc-j6ott5-0"
})(["font-size:12px;width:auto;padding:0;padding-right:16px;margin:0;margin-top:8px;margin-bottom:16px;display:inline-block;"]);
var RadioLabel = exports.RadioLabel = _styledComponents["default"].label.withConfig({
  displayName: "RadioButton__RadioLabel",
  componentId: "sc-j6ott5-1"
})(["margin:0;font-size:14px;width:auto;padding-left:30px;position:relative;cursor:pointer;font-weight:400;line-height:16px;display:inline-block;"]);
var RadioCheckmark = exports.RadioCheckmark = _styledComponents["default"].span.withConfig({
  displayName: "RadioButton__RadioCheckmark",
  componentId: "sc-j6ott5-2"
})(["background:", ";position:absolute;top:0;left:0;width:18px;height:18px;outline:none;border-radius:50%;border:1px solid ", ";&::before{content:'';background:", ";position:absolute;top:4px;left:4px;width:8px;height:8px;outline:none;border-radius:50%;border:none;display:none;}&::after{content:\"\";position:absolute;display:none;left:4px;top:2px;width:5px;height:8px;border-width:0 2px 2px 0;transform:rotate(45deg);background:none;border:none;}", ""], _fontColorConst["default"].white, _fontColorConst["default"].gray12, _fontColorConst["default"].blackLight, function (props) {
  return [props.theme === 'secondary' && (0, _styledComponents.css)(["&:before{background:", ";}"], _fontColorConst["default"].link), props.theme === 'primary' && (0, _styledComponents.css)(["&:before{background:", ";}"], _fontColorConst["default"].red)];
});
var RadioText = exports.RadioText = _styledComponents["default"].div.withConfig({
  displayName: "RadioButton__RadioText",
  componentId: "sc-j6ott5-3"
})(["color:", ";font-size:14px;line-height:20px;font-family:'Open Sans',sans-serif;outline:none;"], _fontColorConst["default"].blackLight);
var RadioInput = exports.RadioInput = _styledComponents["default"].input.withConfig({
  displayName: "RadioButton__RadioInput",
  componentId: "sc-j6ott5-4"
})(["color:", ";font-size:16px;font-weight:400;font-family:'Open Sans',sans-serif;display:inline-block;width:100%;border:none;border-bottom:1px solid ", ";background-color:transparent;padding-left:20px;outline:none;box-shadow:none;position:absolute;opacity:0;cursor:pointer;left:0;height:100%;margin:0;line-height:normal;&:checked ~ ", "{&::after,&::before{display:block;}}&:hover ~ ", "{color:", ";}&:checked ~ ", "{color:", ";font-weight:500;}&:disabled{cursor:not-allowed;}", " &:disabled ~ ", "{background:", ";border:1px solid ", ";cursor:not-allowed;&::before{background:", ";}}&:disabled ~ ", "{opacity:0.65;color:", ";cursor:not-allowed;}"], _fontColorConst["default"].gray13, _fontColorConst["default"].gray6, RadioCheckmark, RadioText, _fontColorConst["default"].black, RadioText, _fontColorConst["default"].blackLight, function (props) {
  return [props.theme === 'secondary' && (0, _styledComponents.css)(["&:checked ~ ", "{background:none;border:1px solid ", ";}&:checked ~ ", "{font-weight:500;}"], RadioCheckmark, _fontColorConst["default"].link, RadioText), props.theme === 'primary' && (0, _styledComponents.css)(["&:checked ~ ", "{background:none;border:1px solid ", ";}&:checked ~ ", "{font-weight:500;}"], RadioCheckmark, _fontColorConst["default"].red, RadioText)];
}, RadioCheckmark, _fontColorConst["default"].gray3, _fontColorConst["default"].gray1, _fontColorConst["default"].gray11, RadioText, _fontColorConst["default"].gray13);
function RadioButton(_ref) {
  var id = _ref.id,
    name = _ref.name,
    value = _ref.value,
    refCallback = _ref.refCallback,
    isChecked = _ref.isChecked,
    checked = _ref.checked,
    isDisabled = _ref.isDisabled,
    children = _ref.children,
    onClick = _ref.onClick,
    onChange = _ref.onChange,
    theme = _ref.theme,
    _ref$classes = _ref.classes,
    rootCls = _ref$classes.root,
    labelCls = _ref$classes.label,
    inputCls = _ref$classes.input,
    checkmarkCls = _ref$classes.checkmark,
    textCls = _ref$classes.text;
  var handleClick = function handleClick(event) {
    onClick(event);
  };
  var handleChange = function handleChange(event) {
    onChange(event);
  };
  return /*#__PURE__*/_react["default"].createElement(RadioWrapper, {
    className: (0, _bind["default"])(rootCls)
  }, /*#__PURE__*/_react["default"].createElement(RadioLabel, {
    htmlFor: id,
    className: (0, _bind["default"])(labelCls, {
      // radioBox__label__checked: isChecked || checked,
      // radioLabelDisabled: isDisabled,
    })
  }, /*#__PURE__*/_react["default"].createElement(RadioInput, {
    type: "radio",
    id: id,
    theme: theme,
    name: name,
    value: value,
    ref: refCallback,
    disabled: isDisabled,
    checked: checked || isChecked,
    onClick: handleClick,
    onChange: handleChange,
    className: (0, _bind["default"])(inputCls)
  }), /*#__PURE__*/_react["default"].createElement(RadioCheckmark, {
    className: (0, _bind["default"])(checkmarkCls),
    theme: theme
  }), /*#__PURE__*/_react["default"].createElement(RadioText, {
    className: (0, _bind["default"])(textCls)
  }, children || value)));
}
RadioButton.propTypes = {
  id: _propTypes["default"].string.isRequired,
  name: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  isChecked: _propTypes["default"].bool,
  checked: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool]),
  isDisabled: _propTypes["default"].bool,
  theme: _propTypes["default"].oneOf(['primary', 'secondary', 'default']),
  refCallback: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  classes: _propTypes["default"].object,
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element])
};
RadioButton.defaultProps = {
  name: '',
  value: '',
  isChecked: false,
  checked: undefined,
  isDisabled: false,
  theme: 'secondary',
  refCallback: null,
  onClick: function onClick() {},
  onChange: function onChange() {},
  classes: {},
  children: null
};
var _default = exports["default"] = RadioButton;