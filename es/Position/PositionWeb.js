"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _excluded = ["position", "top", "right", "bottom", "left", "zIndex", "transform", "children"];
var Position = (0, _styledComponents["default"])(function (_ref) {
  var position = _ref.position,
    top = _ref.top,
    right = _ref.right,
    bottom = _ref.bottom,
    left = _ref.left,
    zIndex = _ref.zIndex,
    transform = _ref.transform,
    children = _ref.children,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].cloneElement(children, props);
}).withConfig({
  displayName: "PositionWeb__Position",
  componentId: "sc-52jrbl-0"
})(["&&&{position:", ";top:", ";right:", ";bottom:", ";left:", ";z-index:", ";transform:", ";}"], function (props) {
  return props.position ? props.position : '';
}, function (props) {
  return props.top != null ? props.theme.px(props.top) : '';
}, function (props) {
  return props.right != null ? props.theme.px(props.right) : '';
}, function (props) {
  return props.bottom != null ? props.theme.px(props.bottom) : '';
}, function (props) {
  return props.left != null ? props.theme.px(props.left) : '';
}, function (props) {
  return props.zIndex != null ? props.zIndex : '';
}, function (props) {
  return props.transform || '';
});
Position.propTypes = {
  position: _propTypes["default"].oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky']),
  top: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  right: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  bottom: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  left: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  zIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  transform: _propTypes["default"].string
};
var _default = exports["default"] = Position;