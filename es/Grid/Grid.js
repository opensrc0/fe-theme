"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _theme = _interopRequireDefault(require("../theme"));
var _excluded = ["overflow", "xs", "sm", "md", "lg", "pushXS", "pushSM", "pushMD", "pushLG", "pullXS", "pullSM", "pullMD", "pullLG", "paddingXS", "paddingSM", "paddingMD", "paddingLG", "children"],
  _excluded2 = ["children", "xs", "sm", "md", "lg"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var StyledGrid = (0, _styledComponents["default"])(function (_ref) {
  var overflow = _ref.overflow,
    xs = _ref.xs,
    sm = _ref.sm,
    md = _ref.md,
    lg = _ref.lg,
    pushXS = _ref.pushXS,
    pushSM = _ref.pushSM,
    pushMD = _ref.pushMD,
    pushLG = _ref.pushLG,
    pullXS = _ref.pullXS,
    pullSM = _ref.pullSM,
    pullMD = _ref.pullMD,
    pullLG = _ref.pullLG,
    paddingXS = _ref.paddingXS,
    paddingSM = _ref.paddingSM,
    paddingMD = _ref.paddingMD,
    paddingLG = _ref.paddingLG,
    children = _ref.children,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", rest, children);
}).withConfig({
  displayName: "Grid__StyledGrid",
  componentId: "sc-1fk1poa-0"
})(["", ";@media (min-width:768px){", "}@media (min-width:768px) and (max-width:991px){", "}@media (min-width:992px){", "}@media (min-width:992px) and (max-width:1199px){", "}@media (min-width:1200px){", "}"], function (props) {
  return [props.container && (0, _styledComponents.css)(["margin-left:-16px;margin-right:-16px;&::after,&::before{content:\" \";display:table;}&::after{clear:both;}"]), (props.visibleLG || props.visibleMD || props.visibleSM || props.visibleXS) && (0, _styledComponents.css)(["display:none;"]), props.item && (0, _styledComponents.css)(["position:relative;min-height:1px;padding-left:16px;padding-right:16px;overflow:", ";@media (max-width:767px){", "  ", " ", "}@media (min-width:768px) and (max-width:991px){", " ", " ", "}@media (min-width:992px) and (max-width:1199px){", " ", " ", "}@media (min-width:1200px){", " ", " ", "}"], props.overflow ? props.overflow : '', (props.paddingXS || props.paddingXS === 0 || props.paddingXS === '0') && (0, _styledComponents.css)(["padding-left:", "px !important;padding-right:", "px !important;"], props.theme.px(props.paddingXS), props.theme.px(props.paddingXS)), props.hiddenXS && (0, _styledComponents.css)(["display:none;"]), props.visibleXS && (0, _styledComponents.css)(["display:block;"]), (props.paddingSM || props.paddingSM === 0 || props.paddingSM === '0') && (0, _styledComponents.css)(["padding-left:", "px !important;padding-right:", "px !important;"], props.theme.px(props.paddingSM), props.theme.px(props.paddingSM)), props.hiddenSM && (0, _styledComponents.css)(["display:none;"]), props.visibleSM && (0, _styledComponents.css)(["display:block;"]), (props.paddingMD || props.paddingMD === 0 || props.paddingMD === '0') && (0, _styledComponents.css)(["padding-left:", "px !important;padding-right:", "px !important;"], props.theme.px(props.paddingMD), props.theme.px(props.paddingMD)), props.hiddenMD && (0, _styledComponents.css)(["display:none;"]), props.visibleMD && (0, _styledComponents.css)(["display:block;"]), (props.paddingLG || props.paddingLG === 0 || props.paddingLG === '0') && (0, _styledComponents.css)(["padding-left:", "px !important;padding-right:", "px !important;"], props.theme.px(props.paddingLG), props.theme.px(props.paddingLG)), props.hiddenLG && (0, _styledComponents.css)(["display:none;"]), props.visibleLG && (0, _styledComponents.css)(["display:block;"])), props.flush && (0, _styledComponents.css)(["padding:0;"]), props.flushLeft && (0, _styledComponents.css)(["padding-left:0;"]), props.flushRight && (0, _styledComponents.css)(["padding-right:0;"]), props.xs && (0, _styledComponents.css)(["float:left;width:", ";"], props.xs === '12' ? '100%' : props.xs === '11' ? '91.66666667%' : props.xs === '10' ? '83.33333333%' : props.xs === '9' ? '75%' : props.xs === '8' ? '66.66666667%' : props.xs === '7' ? '58.33333333%' : props.xs === '6' ? '50%' : props.xs === '5' ? '41.66666667%' : props.xs === '4' ? '33.33333333%' : props.xs === '3' ? '25%' : props.xs === '2' ? '16.66666667%' : props.xs === '1' ? '8.33333333%' : ''), props.pushXS && (0, _styledComponents.css)(["margin-left:", ";"], props.pushXS === '12' ? '100%' : props.pushXS === '11' ? '91.66666667%' : props.pushXS === '10' ? '83.33333333%' : props.pushXS === '9' ? '75%' : props.pushXS === '8' ? '66.66666667%' : props.pushXS === '7' ? '58.33333333%' : props.pushXS === '6' ? '50%' : props.pushXS === '5' ? '41.66666667%' : props.pushXS === '4' ? '33.33333333%' : props.pushXS === '3' ? '25%' : props.pushXS === '2' ? '16.66666667%' : props.pushXS === '1' ? '8.33333333%' : props.pushXS === '0' ? '0%' : ''), props.pullXS && (0, _styledComponents.css)(["right:", ";"], props.pullXS === '12' ? '100%' : props.pullXS === '11' ? '91.66666667%' : props.pullXS === '10' ? '83.33333333%' : props.pullXS === '9' ? '75%' : props.pullXS === '8' ? '66.66666667%' : props.pullXS === '7' ? '58.33333333%' : props.pullXS === '6' ? '50%' : props.pullXS === '5' ? '41.66666667%' : props.pullXS === '4' ? '33.33333333%' : props.pullXS === '3' ? '25%' : props.pullXS === '2' ? '16.66666667%' : props.pullXS === '1' ? '8.33333333%' : props.pullXS === '0' ? '0%' : '')];
}, function (props) {
  return [props.sm && (0, _styledComponents.css)(["float:left;width:", ";"], props.sm === '12' ? '100%' : props.sm === '11' ? '91.66666667%' : props.sm === '10' ? '83.33333333%' : props.sm === '9' ? '75%' : props.sm === '8' ? '66.66666667%' : props.sm === '7' ? '58.33333333%' : props.sm === '6' ? '50%' : props.sm === '5' ? '41.66666667%' : props.sm === '4' ? '33.33333333%' : props.sm === '3' ? '25%' : props.sm === '2' ? '16.66666667%' : props.sm === '1' ? '8.33333333%' : '')];
}, function (props) {
  return [props.pushSM && (0, _styledComponents.css)(["margin-left:", ";"], props.pushSM === '12' ? '100%' : props.pushSM === '11' ? '91.66666667%' : props.pushSM === '10' ? '83.33333333%' : props.pushSM === '9' ? '75%' : props.pushSM === '8' ? '66.66666667%' : props.pushSM === '7' ? '58.33333333%' : props.pushSM === '6' ? '50%' : props.pushSM === '5' ? '41.66666667%' : props.pushSM === '4' ? '33.33333333%' : props.pushSM === '3' ? '25%' : props.pushSM === '2' ? '16.66666667%' : props.pushSM === '1' ? '8.33333333%' : props.pushSM === '0' ? '0%' : ''), props.pullSM && (0, _styledComponents.css)(["right:", ";"], props.pullSM === '12' ? '100%' : props.pullSM === '11' ? '91.66666667%' : props.pullSM === '10' ? '83.33333333%' : props.pullSM === '9' ? '75%' : props.pullSM === '8' ? '66.66666667%' : props.pullSM === '7' ? '58.33333333%' : props.pullSM === '6' ? '50%' : props.pullSM === '5' ? '41.66666667%' : props.pullSM === '4' ? '33.33333333%' : props.pullSM === '3' ? '25%' : props.pullSM === '2' ? '16.66666667%' : props.pullSM === '1' ? '8.33333333%' : props.pullSM === '0' ? '0%' : '')];
}, function (props) {
  return [props.md && (0, _styledComponents.css)(["float:left;width:", ";"], props.md === '12' ? '100%' : props.md === '11' ? '91.66666667%' : props.md === '10' ? '83.33333333%' : props.md === '9' ? '75%' : props.md === '8' ? '66.66666667%' : props.md === '7' ? '58.33333333%' : props.md === '6' ? '50%' : props.md === '5' ? '41.66666667%' : props.md === '4' ? '33.33333333%' : props.md === '3' ? '25%' : props.md === '2' ? '16.66666667%' : props.md === '1' ? '8.33333333%' : '')];
}, function (props) {
  return [props.pushMD && (0, _styledComponents.css)(["margin-left:", ";"], props.pushMD === '12' ? '100%' : props.pushMD === '11' ? '91.66666667%' : props.pushMD === '10' ? '83.33333333%' : props.pushMD === '9' ? '75%' : props.pushMD === '8' ? '66.66666667%' : props.pushMD === '7' ? '58.33333333%' : props.pushMD === '6' ? '50%' : props.pushMD === '5' ? '41.66666667%' : props.pushMD === '4' ? '33.33333333%' : props.pushMD === '3' ? '25%' : props.pushMD === '2' ? '16.66666667%' : props.pushMD === '1' ? '8.33333333%' : props.pushMD === '0' ? '0%' : ''), props.pullMD && (0, _styledComponents.css)(["right:", ";"], props.pullMD === '12' ? '100%' : props.pullMD === '11' ? '91.66666667%' : props.pullMD === '10' ? '83.33333333%' : props.pullMD === '9' ? '75%' : props.pullMD === '8' ? '66.66666667%' : props.pullMD === '7' ? '58.33333333%' : props.pullMD === '6' ? '50%' : props.pullMD === '5' ? '41.66666667%' : props.pullMD === '4' ? '33.33333333%' : props.pullMD === '3' ? '25%' : props.pullMD === '2' ? '16.66666667%' : props.pullMD === '1' ? '8.33333333%' : props.pullMD === '0' ? '0%' : '')];
}, function (props) {
  return [props.lg && (0, _styledComponents.css)(["float:left;width:", ";"], props.lg === '12' ? '100%' : props.lg === '11' ? '91.66666667%' : props.lg === '10' ? '83.33333333%' : props.lg === '9' ? '75%' : props.lg === '8' ? '66.66666667%' : props.lg === '7' ? '58.33333333%' : props.lg === '6' ? '50%' : props.lg === '5' ? '41.66666667%' : props.lg === '4' ? '33.33333333%' : props.lg === '3' ? '25%' : props.lg === '2' ? '16.66666667%' : props.lg === '1' ? '8.33333333%' : ''), props.pushLG && (0, _styledComponents.css)(["margin-left:", ";"], props.pushLG === '12' ? '100%' : props.pushLG === '11' ? '91.66666667%' : props.pushLG === '10' ? '83.33333333%' : props.pushLG === '9' ? '75%' : props.pushLG === '8' ? '66.66666667%' : props.pushLG === '7' ? '58.33333333%' : props.pushLG === '6' ? '50%' : props.pushLG === '5' ? '41.66666667%' : props.pushLG === '4' ? '33.33333333%' : props.pushLG === '3' ? '25%' : props.pushLG === '2' ? '16.66666667%' : props.pushLG === '1' ? '8.33333333%' : props.pushLG === '0' ? '0%' : ''), props.pullLG && (0, _styledComponents.css)(["right:", ";"], props.pullLG === '12' ? '100%' : props.pullLG === '11' ? '91.66666667%' : props.pullLG === '10' ? '83.33333333%' : props.pullLG === '9' ? '75%' : props.pullLG === '8' ? '66.66666667%' : props.pullLG === '7' ? '58.33333333%' : props.pullLG === '6' ? '50%' : props.pullLG === '5' ? '41.66666667%' : props.pullLG === '4' ? '33.33333333%' : props.pullLG === '3' ? '25%' : props.pullLG === '2' ? '16.66666667%' : props.pullLG === '1' ? '8.33333333%' : props.pullLG === '0' ? '0%' : '')];
});
var Grid = function Grid(_ref2) {
  var children = _ref2.children,
    XS = _ref2.xs,
    SM = _ref2.sm,
    MD = _ref2.md,
    LG = _ref2.lg,
    props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
  var xs = _theme["default"].toString(XS);
  var sm = _theme["default"].toString(SM);
  var md = _theme["default"].toString(MD);
  var lg = _theme["default"].toString(LG);
  return /*#__PURE__*/_react["default"].createElement(StyledGrid, (0, _extends2["default"])({
    xs: xs,
    sm: sm,
    md: md,
    lg: lg
  }, props), children);
};
Grid.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element, _propTypes["default"].array]),
  container: _propTypes["default"].bool,
  item: _propTypes["default"].bool,
  flush: _propTypes["default"].bool,
  flushLeft: _propTypes["default"].bool,
  flushRight: _propTypes["default"].bool,
  xs: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  sm: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  md: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  lg: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  pushXS: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  pushSM: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  pushMD: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  pushLG: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  pullXS: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  pullSM: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  pullMD: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  pullLG: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  paddingXS: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  paddingSM: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  paddingMD: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  paddingLG: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  overflow: _propTypes["default"].oneOfType(['hidden', 'scroll', 'auto', 'inherit', 'visible']),
  visibleXS: _propTypes["default"].bool,
  visibleSM: _propTypes["default"].bool,
  visibleMD: _propTypes["default"].bool,
  visibleLG: _propTypes["default"].bool,
  hiddenXS: _propTypes["default"].bool,
  hiddenSM: _propTypes["default"].bool,
  hiddenMD: _propTypes["default"].bool,
  hiddenLG: _propTypes["default"].bool
};
Grid.defaultProps = {
  children: null,
  container: false,
  item: false,
  flush: false,
  overflow: '',
  flushLeft: false,
  flushRight: false,
  xs: '',
  sm: '',
  md: '',
  lg: '',
  pushXS: '',
  pushSM: '',
  pushMD: '',
  pushLG: '',
  pullXS: '',
  pullSM: '',
  pullMD: '',
  pullLG: '',
  paddingXS: '',
  paddingSM: '',
  paddingMD: '',
  paddingLG: '',
  visibleXS: false,
  visibleSM: false,
  visibleMD: false,
  visibleLG: false,
  hiddenXS: false,
  hiddenSM: false,
  hiddenMD: false,
  hiddenLG: false
};
var _default = exports["default"] = Grid;