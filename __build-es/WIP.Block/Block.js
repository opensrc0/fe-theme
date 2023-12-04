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
var _excluded = ["margin", "marginXS", "marginSM", "marginMD", "marginLG", "marginTop", "marginTopXS", "marginBottom", "marginLeft", "marginLeftXS", "marginRight", "marginRightXS", "padding", "paddingXS", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "top", "left", "right", "bottom", "width", "widthXS", "minWidth", "minWidthXS", "maxWidth", "maxWidthXS", "minHeight", "maxHeight", "height", "heightXS", "children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Spacer = (0, _styledComponents["default"])(function (_ref) {
  var margin = _ref.margin,
    marginXS = _ref.marginXS,
    marginSM = _ref.marginSM,
    marginMD = _ref.marginMD,
    marginLG = _ref.marginLG,
    marginTop = _ref.marginTop,
    marginTopXS = _ref.marginTopXS,
    marginBottom = _ref.marginBottom,
    marginLeft = _ref.marginLeft,
    marginLeftXS = _ref.marginLeftXS,
    marginRight = _ref.marginRight,
    marginRightXS = _ref.marginRightXS,
    padding = _ref.padding,
    paddingXS = _ref.paddingXS,
    paddingTop = _ref.paddingTop,
    paddingBottom = _ref.paddingBottom,
    paddingLeft = _ref.paddingLeft,
    paddingRight = _ref.paddingRight,
    top = _ref.top,
    left = _ref.left,
    right = _ref.right,
    bottom = _ref.bottom,
    width = _ref.width,
    widthXS = _ref.widthXS,
    minWidth = _ref.minWidth,
    minWidthXS = _ref.minWidthXS,
    maxWidth = _ref.maxWidth,
    maxWidthXS = _ref.maxWidthXS,
    minHeight = _ref.minHeight,
    maxHeight = _ref.maxHeight,
    height = _ref.height,
    heightXS = _ref.heightXS,
    children = _ref.children,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].cloneElement(children, props);
}).withConfig({
  displayName: "Block__Spacer",
  componentId: "sc-lpjlz4-0"
})(["&&&{margin:", ";margin-top:", ";margin-bottom:", ";margin-left:", ";margin-right:", ";top:", ";bottom:", ";left:", ";right:", ";padding:", ";padding-top:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";min-width:", ";width:", ";max-width:", ";min-height:", ";height:", ";max-height:", ";@media (max-width:767px){", "}@media (min-width:768px) and (max-width:991px){", "}@media (min-width:992px) and (max-width:1199px){", "}@media (min-width:1200px){", "}}"], function (props) {
  return props.margin ? "".concat(props.theme.px(props.margin)) : '';
}, function (props) {
  return props.marginTop ? "".concat(props.theme.px(props.marginTop)) : '';
}, function (props) {
  return props.marginBottom ? "".concat(props.theme.px(props.marginBottom)) : '';
}, function (props) {
  return props.marginLeft ? "".concat(props.theme.px(props.marginLeft)) : '';
}, function (props) {
  return props.marginRight ? "".concat(props.theme.px(props.marginRight)) : '';
}, function (props) {
  return props.top ? "".concat(props.theme.px(props.top)) : '';
}, function (props) {
  return props.bottom ? "".concat(props.theme.px(props.bottom)) : '';
}, function (props) {
  return props.left ? "".concat(props.theme.px(props.left)) : '';
}, function (props) {
  return props.right ? "".concat(props.theme.px(props.right)) : '';
}, function (props) {
  return props.padding ? "".concat(props.theme.px(props.padding)) : '';
}, function (props) {
  return props.paddingTop ? "".concat(props.theme.px(props.paddingTop)) : '';
}, function (props) {
  return props.paddingBottom ? "".concat(props.theme.px(props.paddingBottom)) : '';
}, function (props) {
  return props.paddingLeft ? "".concat(props.theme.px(props.paddingLeft)) : '';
}, function (props) {
  return props.paddingRight ? "".concat(props.theme.px(props.paddingRight)) : '';
}, function (props) {
  return props.minWidth != null ? "".concat(props.theme.px(props.minWidth)) : '';
}, function (props) {
  return props.width != null ? "".concat(props.theme.px(props.width)) : '';
}, function (props) {
  return props.maxWidth != null ? "".concat(props.theme.px(props.maxWidth)) : '';
}, function (props) {
  return props.minHeight != null ? "".concat(props.theme.px(props.minHeight)) : '';
}, function (props) {
  return props.height != null ? "".concat(props.theme.px(props.height)) : '';
}, function (props) {
  return props.maxHeight != null ? "".concat(props.theme.px(props.maxHeight)) : '';
}, function (props) {
  return [props.marginXS && (0, _styledComponents.css)(["margin:", ";"], props.theme.px(props.marginXS)), props.marginTopXS && (0, _styledComponents.css)(["margin-top:", ";"], props.theme.px(props.marginTopXS)), props.marginLeftXS && (0, _styledComponents.css)(["margin-left:", ";"], props.theme.px(props.marginLeftXS)), props.marginRightXS && (0, _styledComponents.css)(["margin-right:", ";"], props.theme.px(props.marginRightXS)), props.paddingXS && (0, _styledComponents.css)(["padding:", ";"], props.theme.px(props.paddingXS)), props.widthXS && (0, _styledComponents.css)(["width:", ";"], props.theme.px(props.widthXS)), props.minWidthXS && (0, _styledComponents.css)(["min-width:", ";"], props.theme.px(props.minWidthXS)), props.maxWidthXS && (0, _styledComponents.css)(["max-width:", ";"], props.theme.px(props.maxWidthXS)), props.heightXS && (0, _styledComponents.css)(["height:", ";"], props.theme.px(props.heightXS))];
}, function (props) {
  return [props.marginSM && (0, _styledComponents.css)(["margin:", ";"], props.theme.px(props.marginSM)), props.paddingSM && (0, _styledComponents.css)(["padding:", ";"], props.theme.px(props.paddingSM))];
}, function (props) {
  return [props.marginMD && (0, _styledComponents.css)(["margin:", ";"], props.theme.px(props.marginMD)), props.paddingMD && (0, _styledComponents.css)(["padding:", ";"], props.theme.px(props.paddingMD))];
}, function (props) {
  return [props.marginLG && (0, _styledComponents.css)(["margin:", ";"], props.theme.px(props.marginLG)), props.paddingLG && (0, _styledComponents.css)(["padding:", ";"], props.theme.px(props.paddingLG))];
});
Spacer.propTypes = {
  margin: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  marginLG: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  marginMD: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  marginSM: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  marginXS: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  marginTop: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  marginTopXS: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  marginBottom: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  marginLeft: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  marginLeftXS: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  marginRight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  marginRightXS: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  padding: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  paddingTop: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  paddingBottom: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  paddingLeft: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  paddingRight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  paddingLG: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  paddingMD: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  paddingSM: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  paddingXS: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  widthXS: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  minWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  minWidthXS: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  maxWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  maxWidthXS: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  minHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  heightXS: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  maxHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  top: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  bottom: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  left: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  right: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]))
};
var _default = exports["default"] = Spacer;