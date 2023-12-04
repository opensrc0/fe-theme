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
var _theme = _interopRequireDefault(require("../theme"));
var _excluded = ["component", "color", "backgroundColor", "backgroundColorXS", "size", "sizeMD", "sizeSM", "sizeXS", "weight", "weightXS", "family", "align", "alignXS", "truncate", "children", "display", "displayXS", "lineHeight", "lineHeightXS", "verticalAlign", "position", "overflow", "float", "opacity", "textTransform", "border", "hiddenLG", "hiddenMD", "hiddenSM", "hiddenXS", "visibleLG", "visibleMD", "visibleSM", "visibleXS"];
/* eslint-disable no-nested-ternary */
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Text = (0, _styledComponents["default"])(function (_ref) {
  var component = _ref.component,
    color = _ref.color,
    backgroundColor = _ref.backgroundColor,
    backgroundColorXS = _ref.backgroundColorXS,
    size = _ref.size,
    sizeMD = _ref.sizeMD,
    sizeSM = _ref.sizeSM,
    sizeXS = _ref.sizeXS,
    weight = _ref.weight,
    weightXS = _ref.weightXS,
    family = _ref.family,
    align = _ref.align,
    alignXS = _ref.alignXS,
    truncate = _ref.truncate,
    children = _ref.children,
    display = _ref.display,
    displayXS = _ref.displayXS,
    lineHeight = _ref.lineHeight,
    lineHeightXS = _ref.lineHeightXS,
    verticalAlign = _ref.verticalAlign,
    position = _ref.position,
    overflow = _ref.overflow,
    _float = _ref["float"],
    opacity = _ref.opacity,
    textTransform = _ref.textTransform,
    border = _ref.border,
    hiddenLG = _ref.hiddenLG,
    hiddenMD = _ref.hiddenMD,
    hiddenSM = _ref.hiddenSM,
    hiddenXS = _ref.hiddenXS,
    visibleLG = _ref.visibleLG,
    visibleMD = _ref.visibleMD,
    visibleSM = _ref.visibleSM,
    visibleXS = _ref.visibleXS,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(component, props, children);
}).withConfig({
  displayName: "TextWeb__Text",
  componentId: "sc-wnfhin-0"
})(["color:", ";background-color:", ";font-size:", ";font-weight:", ";font-family:", ";line-height:", ";text-align:", ";vertical-align:", ";overflow:", ";white-space:", ";text-overflow:", ";position:", ";float:", ";opacity:", ";text-transform:", ";border:", ";", ";@media (max-width:767px){", "}@media (min-width:768px) and (max-width:991px){", "}@media (min-width:992px) and (max-width:1199px){", "}@media (min-width:1200px){", "}"], function (props) {
  return props.color ? props.theme.color[props.color] : '';
}, function (props) {
  return props.backgroundColor ? props.theme.color[props.backgroundColor] : '';
}, function (props) {
  return props.size ? props.theme.fontSize[props.size] : '';
}, function (props) {
  return props.weight ? props.theme.fontWeight[props.weight] : '';
}, function (props) {
  return props.family ? props.theme.fontFamily[props.family] : '';
}, function (props) {
  return props.lineHeight ? props.lineHeight : props.component === 'p' ? '1.5' : '';
}, function (props) {
  return props.align || '';
}, function (props) {
  return props.verticalAlign || '';
}, function (props) {
  return props.truncate ? 'hidden' : props.overflow ? props.overflow : '';
}, function (props) {
  return props.truncate ? 'nowrap' : '';
}, function (props) {
  return props.truncate ? 'ellipsis' : '';
}, function (props) {
  return props.position || '';
}, function (props) {
  return props["float"] ? "".concat(props["float"]) : '';
}, function (props) {
  return props.opacity ? "".concat(props.opacity) : '';
}, function (props) {
  return props.textTransform ? props.textTransform : '';
}, function (props) {
  return props.border ? props.border : '';
}, function (props) {
  return [props.display && (0, _styledComponents.css)(["display:", ";"], props.theme.display[props.display]), (props.visibleLG || props.visibleMD || props.visibleSM || props.visibleXS) && (0, _styledComponents.css)(["display:none;"])];
}, function (props) {
  return [props.hiddenXS && (0, _styledComponents.css)(["display:none;"]), props.visibleXS && (0, _styledComponents.css)(["display:", ";"], props.component === 'span' ? 'inline-block' : 'block'), props.sizeXS && (0, _styledComponents.css)(["font-size:", ";"], props.theme.fontSize[props.sizeXS]), props.displayXS && (0, _styledComponents.css)(["display:", ";"], props.theme.display[props.displayXS]), props.weightXS && (0, _styledComponents.css)(["font-weight:", ";"], props.theme.fontWeight[props.weightXS]), props.lineHeightXS && (0, _styledComponents.css)(["line-height:", ";"], props.lineHeightXS), props.backgroundColorXS && (0, _styledComponents.css)(["background-color:", ";"], props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : ''), props.alignXS && (0, _styledComponents.css)(["text-align:", ";"], props.alignXS)];
}, function (props) {
  return [props.hiddenSM && (0, _styledComponents.css)(["display:none;"]), props.visibleSM && (0, _styledComponents.css)(["display:", ";"], props.component === 'span' ? 'inline-block' : 'block'), props.sizeSM && (0, _styledComponents.css)(["font-size:", ";"], props.theme.fontSize[props.sizeSM])];
}, function (props) {
  return [props.hiddenMD && (0, _styledComponents.css)(["display:none;"]), props.visibleMD && (0, _styledComponents.css)(["display:", ";"], props.component === 'span' ? 'inline-block' : 'block'), props.sizeMD && (0, _styledComponents.css)(["font-size:", ";"], props.theme.fontSize[props.sizeMD])];
}, function (props) {
  return [props.hiddenLG && (0, _styledComponents.css)(["display:none;"]), props.visibleLG && (0, _styledComponents.css)(["display:", ";"], props.component === 'span' ? 'inline-block' : 'block')];
});
Text.propTypes = {
  component: _propTypes["default"].node,
  ref: _propTypes["default"].object,
  color: _propTypes["default"].oneOf(Object.keys(_theme["default"].color)),
  backgroundColor: _propTypes["default"].oneOf(Object.keys(_theme["default"].color)),
  backgroundColorXS: _propTypes["default"].oneOf(Object.keys(_theme["default"].color)),
  size: _propTypes["default"].oneOf(Object.keys(_theme["default"].fontSize)),
  sizeXS: _propTypes["default"].oneOf(Object.keys(_theme["default"].fontSize)),
  sizeSM: _propTypes["default"].oneOf(Object.keys(_theme["default"].fontSize)),
  sizeMD: _propTypes["default"].oneOf(Object.keys(_theme["default"].fontSize)),
  weight: _propTypes["default"].oneOf(Object.keys(_theme["default"].fontWeight)),
  weigthXS: _propTypes["default"].oneOf(Object.keys(_theme["default"].fontWeight)),
  family: _propTypes["default"].oneOf(Object.keys(_theme["default"].fontFamily)),
  display: _propTypes["default"].oneOf(Object.keys(_theme["default"].display)),
  displayXS: _propTypes["default"].oneOf(Object.keys(_theme["default"].display)),
  position: _propTypes["default"].oneOf(['fixed', 'absolute', 'static', 'relative', 'sticky', 'inherit']),
  overflow: _propTypes["default"].oneOf(['hidden', 'scroll', 'auto', 'inherit', 'visible']),
  lineHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  lineHeightXS: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  verticalAlign: _propTypes["default"].oneOf(['top', 'middle', 'bottom', 'inherit']),
  align: _propTypes["default"].oneOf(['left', 'center', 'right', 'justify']),
  alignXS: _propTypes["default"].oneOf(['left', 'center', 'right', 'justify']),
  "float": _propTypes["default"].oneOfType(['left', 'right', 'none']),
  opacity: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  textTransform: _propTypes["default"].oneOfType(['uppercase', 'lowercase', 'none', 'inherit', 'initial']),
  border: _propTypes["default"].string,
  truncate: _propTypes["default"].bool,
  visibleXS: _propTypes["default"].bool,
  visibleSM: _propTypes["default"].bool,
  visibleMD: _propTypes["default"].bool,
  visibleLG: _propTypes["default"].bool,
  hiddenXS: _propTypes["default"].bool,
  hiddenSM: _propTypes["default"].bool,
  hiddenMD: _propTypes["default"].bool,
  hiddenLG: _propTypes["default"].bool
};
Text.defaultProps = {
  component: 'div',
  visibleXS: false,
  visibleSM: false,
  visibleMD: false,
  visibleLG: false,
  hiddenXS: false,
  hiddenSM: false,
  hiddenMD: false,
  hiddenLG: false
};
var _default = exports["default"] = Text;