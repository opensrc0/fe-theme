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
var _excluded = ["color", "kind", "shape", "size"];
var styles = {
  color: function color(props) {
    if (props.kind === 'filled') {
      return props.theme.color.white;
    }
    if (props.kind === 'outlined') {
      return props.theme.color[props.color];
    }
    return '';
  },
  background: function background(props) {
    if (props.kind === 'filled') {
      return props.theme.color[props.color];
    }
    if (props.kind === 'outlined') {
      return props.theme.color[props.background ? props.background : "".concat(props.color, "Lighter")];
    }
    return '';
  },
  borderRadius: function borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.borderRadius;
    }
    if (props.shape === 'sharpEdged') {
      return '0';
    }
    if (props.shape === 'capsular') {
      return props.theme.px(10);
    }
    if (props.shape === 'circular') {
      return '100%';
    }
    if (props.shape === 'bluntCircular') {
      return '16px';
    }
    return '';
  },
  padding: function padding(props) {
    if (props.size === 'xxxs') {
      return props.theme.px([0.25, 1]);
    }
    if (props.size === 'xs') {
      return props.theme.px([0.5, 1.5]);
    }
    return '';
  },
  textTransform: function textTransform(props) {
    if (props.size === 'xxxs') {
      return 'uppercase';
    }
    return 'none';
  }
};
var Chip = (0, _styledComponents["default"])(function (_ref) {
  var color = _ref.color,
    kind = _ref.kind,
    shape = _ref.shape,
    size = _ref.size,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", props);
}).withConfig({
  displayName: "Chip",
  componentId: "sc-11zreyb-0"
})(["display:inline-block;align-items:center;justify-content:center;color:", ";background:", ";border:1px solid ", ";border-radius:", ";font-size:", ";font-weight:", ";padding:", ";text-transform:", ";"], styles.color, styles.background, function (props) {
  return props.bordercolor ? props.theme.color[props.bordercolor] : props.theme.color[props.color];
}, styles.borderRadius, function (props) {
  return props.theme.fontSize[props.size];
}, function (props) {
  return props.theme.fontWeight.medium;
}, styles.padding, styles.textTransform);
Chip.propTypes = {
  color: _propTypes["default"].string,
  kind: _propTypes["default"].oneOf(['filled', 'outlined']),
  shape: _propTypes["default"].oneOf(['bluntEdged', 'sharpEdged', 'capsular', 'bluntCircular']),
  size: _propTypes["default"].string,
  background: _propTypes["default"].string,
  bordercolor: _propTypes["default"].string
};
Chip.defaultProps = {
  color: 'primary',
  kind: 'filled',
  shape: 'bluntEdged',
  size: 'xxxl',
  background: '',
  bordercolor: ''
};
var _default = exports["default"] = Chip;