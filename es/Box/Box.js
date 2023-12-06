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
var _excluded = ["component", "children"];
var Box = (0, _styledComponents["default"])(function (_ref) {
  var component = _ref.component,
    children = _ref.children,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(component, props, children);
}).withConfig({
  displayName: "Box",
  componentId: "sc-1tazwin-0"
})(["&&&{margin-right:auto;margin-left:auto;&::before,&::after{content:\" \";display:table;}&::after{clear:both;}@media (max-width:767px){padding:0;}@media (min-width:768px){width:750px;}@media (min-width:870px){width:830px;}@media (min-width:930px){width:890px;}@media (min-width:992px){width:970px;}@media (min-width:1050px){width:1020px;}@media (min-width:1100px){width:1070px;}@media (min-width:1200px){width:1170px;}@media (min-width:1300px){width:1250px;}@media (min-width:1400px){width:1330px;}}"]);
Box.propTypes = {
  component: _propTypes["default"].node,
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element])
};
Box.defaultProps = {
  children: null,
  component: 'div'
};
var _default = exports["default"] = Box;