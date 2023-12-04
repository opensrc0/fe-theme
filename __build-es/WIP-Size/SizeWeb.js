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
var _excluded = ["minWidth", "width", "maxWidth", "minHeight", "height", "maxHeight", "children"];
var Size = (0, _styledComponents["default"])(function (_ref) {
  var minWidth = _ref.minWidth,
    width = _ref.width,
    maxWidth = _ref.maxWidth,
    minHeight = _ref.minHeight,
    height = _ref.height,
    maxHeight = _ref.maxHeight,
    children = _ref.children,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].cloneElement(children, props);
}).withConfig({
  displayName: "SizeWeb__Size",
  componentId: "sc-f2z0z4-0"
})(["&&&{min-width:", ";width:", ";max-width:", ";min-height:", ";height:", ";max-height:", ";}"], function (props) {
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
});
Size.propTypes = {
  minWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  maxWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  minHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  maxHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
};
var _default = exports["default"] = Size;