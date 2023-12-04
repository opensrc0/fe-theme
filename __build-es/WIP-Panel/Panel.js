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
var _fontColorConst = _interopRequireDefault(require("../theme/font/fontColorConst"));
var _excluded = ["title", "children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var PanelWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Panel__PanelWrapper",
  componentId: "sc-1onpz2e-0"
})(["background-color:", ";border:1px solid transparent;border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,0.05);", ";@media (max-width:767px){border:0;margin-bottom:0;box-shadow:none;background-color:", ";}"], _fontColorConst["default"].white, function (props) {
  return [props["default"] && (0, _styledComponents.css)(["border-color:", ";"], _fontColorConst["default"].gray1)];
}, _fontColorConst["default"].white);
var PanelTitle = _styledComponents["default"].div.withConfig({
  displayName: "Panel__PanelTitle",
  componentId: "sc-1onpz2e-1"
})(["color:", ";font-size:18px;font-weight:600;padding:16px;border-bottom:1px solid ", ";@media (max-width:767px){padding:12px 16px;font-size:16px;}", ";"], _fontColorConst["default"].black, _fontColorConst["default"].gray5, function (props) {
  return [props["default"] && (0, _styledComponents.css)(["color:", ";background-color:", ";border-color:", ";@media (max-width:767px){background-color:", ";}"], _fontColorConst["default"].blackLight, _fontColorConst["default"].gray4, _fontColorConst["default"].gray1, _fontColorConst["default"].white)];
});
var PanelBody = _styledComponents["default"].div.withConfig({
  displayName: "Panel__PanelBody",
  componentId: "sc-1onpz2e-2"
})(["padding:16px;&::before,&::after{display:table;content:\" \";}&::after{clear:both;}@media (max-width:767px){padding:0;}"]);
function Panel(_ref) {
  var title = _ref.title,
    children = _ref.children,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(PanelWrapper, props, /*#__PURE__*/_react["default"].createElement(PanelTitle, props, title), /*#__PURE__*/_react["default"].createElement(PanelBody, null, children));
}
Panel.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  "default": _propTypes["default"].bool
};
Panel.defaultProps = {
  title: null,
  children: null,
  "default": false
};
var _default = exports["default"] = Panel;