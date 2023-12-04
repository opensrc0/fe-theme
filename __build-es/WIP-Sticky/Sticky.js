"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _TextWeb = _interopRequireDefault(require("../WIP-Text/TextWeb"));
var _fontColorConst = _interopRequireDefault(require("../component/theme/font/fontColorConst"));
var _excluded = ["stickyXS", "children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Sticky = (0, _styledComponents["default"])(function (_ref) {
  var stickyXS = _ref.stickyXS,
    children = _ref.children,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_TextWeb["default"], rest, children);
}).withConfig({
  displayName: "Sticky",
  componentId: "sc-n498y4-0"
})(["@media (max-width:767px){", "}"], function (props) {
  return [props.stickyXS && (0, _styledComponents.css)(["background:", ";position:fixed;bottom:0;box-shadow:0 0 4px 0 hsla(0,0%,56.5%,.38824);width:100%;z-index:205;right:0;"], _fontColorConst["default"].white)];
});
function StickyBox(_ref2) {
  var children = _ref2.children,
    stickyXS = _ref2.stickyXS;
  return /*#__PURE__*/_react["default"].createElement(Sticky, {
    stickyXS: stickyXS
  }, children);
}
StickyBox.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  stickyXS: _propTypes["default"].bool
};
StickyBox.defaultProps = {
  children: null,
  stickyXS: false
};
var _default = exports["default"] = StickyBox;