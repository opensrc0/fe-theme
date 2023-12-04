"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var InputWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Input__InputWrapper",
  componentId: "sc-vnh81w-0"
})(["position:relative;margin-bottom:32px;text-align:center;"]);
var InputIcon = (0, _styledComponents["default"])(_reactFontawesome.FontAwesomeIcon).withConfig({
  displayName: "Input__InputIcon",
  componentId: "sc-vnh81w-1"
})(["position:absolute;top:12px;margin-left:12px;color:#03567b;"]);
var SuffixInputIcon = (0, _styledComponents["default"])(InputIcon).withConfig({
  displayName: "Input__SuffixInputIcon",
  componentId: "sc-vnh81w-2"
})(["margin:0;top:50%;padding-right:12px;transform:translate(-100%,-50%);", ""], function (_ref) {
  var onClick = _ref.onClick;
  return onClick && (0, _styledComponents.css)(["cursor:pointer;"]);
});
var InputBox = _styledComponents["default"].input.withConfig({
  displayName: "Input__InputBox",
  componentId: "sc-vnh81w-3"
})(["padding:12px 48px;width:100%;", ""], function (_ref2) {
  var state = _ref2.state;
  return state === 'error' && (0, _styledComponents.css)(["border-color:red;"]);
});
function Input(props) {
  var reference = props.reference,
    iconName = props.iconName,
    placeholder = props.placeholder,
    type = props.type,
    suffixIconName = props.suffixIconName,
    suffixIconSize = props.suffixIconSize,
    onClickSuffixIcon = props.onClickSuffixIcon,
    state = props.state;
  return /*#__PURE__*/_react["default"].createElement(InputWrapper, null, iconName && /*#__PURE__*/_react["default"].createElement(InputIcon, {
    icon: "fa-solid ".concat(iconName),
    size: "xl"
  }), /*#__PURE__*/_react["default"].createElement(InputBox, {
    type: type,
    placeholder: placeholder,
    ref: reference,
    state: state
  }), suffixIconName && /*#__PURE__*/_react["default"].createElement(SuffixInputIcon, {
    icon: "fa-solid ".concat(suffixIconName),
    size: suffixIconSize,
    onClick: onClickSuffixIcon
  }));
}
Input.propTypes = {
  reference: _propTypes["default"].object,
  iconName: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  type: _propTypes["default"].string,
  suffixIconName: _propTypes["default"].string,
  suffixIconSize: _propTypes["default"].string,
  onClickSuffixIcon: _propTypes["default"].func,
  state: _propTypes["default"].string
};
Input.dafaultProps = {
  type: 'text'
};
var _default = exports["default"] = Input;