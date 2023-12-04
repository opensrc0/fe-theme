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
var View = (0, _styledComponents["default"])(function (_ref) {
  var component = _ref.component,
    children = _ref.children,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(component, props, children);
}).withConfig({
  displayName: "View",
  componentId: "sc-192f3jk-0"
})(["", ""], '');
View.propTypes = {
  component: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node
};
View.defaultProps = {
  component: 'div'
};
var _default = exports["default"] = View;