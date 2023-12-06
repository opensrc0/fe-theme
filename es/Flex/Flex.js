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
var _excluded = ["alignContent", "alignItems", "alignSelf", "display", "flex", "flexBasis", "flexDirection", "flexGrow", "flexShrink", "flexWrap", "flexFlow", "justifyContent", "order", "children"];
var Flex = (0, _styledComponents["default"])(function (_ref) {
  var alignContent = _ref.alignContent,
    alignItems = _ref.alignItems,
    alignSelf = _ref.alignSelf,
    display = _ref.display,
    flex = _ref.flex,
    flexBasis = _ref.flexBasis,
    flexDirection = _ref.flexDirection,
    flexGrow = _ref.flexGrow,
    flexShrink = _ref.flexShrink,
    flexWrap = _ref.flexWrap,
    flexFlow = _ref.flexFlow,
    justifyContent = _ref.justifyContent,
    order = _ref.order,
    children = _ref.children,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].cloneElement(children, props);
}).withConfig({
  displayName: "Flex",
  componentId: "sc-111fwv9-0"
})(["&&&{align-content:", ";align-self:", ";align-items:", ";display:", ";flex:", ";flex-basis:", ";flex-direction:", ";flex-grow:", ";flex-shrink:", ";flex-wrap:", ";flex-flow:", ";justify-content:", ";order:", ";}"], function (props) {
  return props.alignContent ? props.alignContent : '';
}, function (props) {
  return props.alignSelf ? props.alignSelf : '';
}, function (props) {
  return props.alignItems ? props.alignItems : '';
}, function (props) {
  return props.display ? props.display : '';
}, function (props) {
  return props.flex ? props.flex : '';
}, function (props) {
  return props.flexBasis ? props.flexBasis : '';
}, function (props) {
  return props.flexDirection ? props.flexDirection : '';
}, function (props) {
  return props.flexGrow ? props.flexGrow : '';
}, function (props) {
  return props.flexShrink ? props.flexShrink : '';
}, function (props) {
  return props.flexWrap ? props.flexWrap : '';
}, function (props) {
  return props.flexFlow ? props.flexFlow : '';
}, function (props) {
  return props.justifyContent ? props.justifyContent : '';
}, function (props) {
  return props.order ? props.order : '';
});
Flex.propTypes = {
  alignContent: _propTypes["default"].oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch']),
  alignItems: _propTypes["default"].oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: _propTypes["default"].oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  display: _propTypes["default"].oneOf(['none', 'flex', 'inline-flex']),
  flex: _propTypes["default"].string,
  flexBasis: _propTypes["default"].string,
  flexFlow: _propTypes["default"].string,
  flexDirection: _propTypes["default"].oneOf(['column-reverse', 'column', 'row-reverse', 'row', 'inherit']),
  flexGrow: _propTypes["default"].number,
  flexShrink: _propTypes["default"].number,
  flexWrap: _propTypes["default"].oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  justifyContent: _propTypes["default"].oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  order: _propTypes["default"].number
};
Flex.defaultProps = {
  display: 'flex'
};
var _default = exports["default"] = Flex;