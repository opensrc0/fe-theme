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
var _excluded = ["color", "right"];
var styles = {
  color: function color(props) {
    if (props.color) {
      return props.theme.color[props.color];
    }
    if (props.disabled) {
      return props.theme.color.greyLight;
    }
    return '';
  }
};
var Icon = (0, _styledComponents["default"])(function (_ref) {
  var color = _ref.color,
    right = _ref.right,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("i", props);
}).withConfig({
  displayName: "Icon",
  componentId: "sc-14lv8rf-0"
})(["color:", ";margin-left:", ";margin-right:", ";font-size:", ";cursor:", ";pointer-events:", ";opacity:", ";&:hover{background:", ";}"], styles.color, function (props) {
  return props.hasChildren && props.right ? props.theme.px(1) : '';
}, function (props) {
  return props.hasChildren ? props.theme.px(1) : '';
}, function (props) {
  return props.size ? props.theme.fontSize[props.size] : '';
}, function (props) {
  return props.onClick ? 'pointer' : '';
}, function (props) {
  return props.disabled ? 'none' : '';
}, function (props) {
  return props.disabled ? '0.5' : '';
}, function (props) {
  return props.onClick ? props.theme.color.translucent : '';
});
Icon.propTypes = {
  color: _propTypes["default"].string,
  right: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  children: _propTypes["default"].node
};
Icon.defaultProps = {
  right: false,
  disabled: false
};
var _default = exports["default"] = Icon;