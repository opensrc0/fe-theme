"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _theme = _interopRequireDefault(require("../theme"));
var _excluded = ["color", "kind", "size", "shape", "fluid", "isLoading"],
  _excluded2 = ["label", "disabled", "className", "clickCbk", "spin"];
/* eslint-disable react/jsx-props-no-spreading */
var styles = {
  color: function color(props) {
    var lTheme = props.theme.color ? props.theme : _theme["default"];
    if (props.kind === 'filled') {
      return lTheme.color.white;
    }
    if (props.kind === 'outlined') {
      return lTheme.color[props.color];
    }
    return '';
  },
  backgroundColor: function backgroundColor(props) {
    var lTheme = props.theme.color ? props.theme : _theme["default"];
    if (props.kind === 'filled') {
      return lTheme.color[props.color || 'secondary'];
    }
    if (props.kind === 'outlined') {
      return lTheme.color.white;
    }
    return '';
  },
  fontSize: function fontSize(props) {
    if (props.size === 'small') {
      return _theme["default"].fontSize.xs;
    }
    if (props.size === 'medium') {
      return _theme["default"].fontSize.s;
    }
    if (props.size === 'large') {
      return _theme["default"].fontSize.s;
    }
    return '';
  },
  padding: function padding(props) {
    if (props.size === 'small') {
      return _theme["default"].px([1, 2]);
    }
    if (props.size === 'medium') {
      return _theme["default"].px([1.5, 2]);
    }
    if (props.size === 'large') {
      return _theme["default"].px([2]);
    }
    return '';
  },
  borderColor: function borderColor(props) {
    var lTheme = props.theme.color ? props.theme : _theme["default"];
    if (props.kind === 'filled') {
      return lTheme.color[props.color];
    }
    if (props.kind === 'outlined') {
      return lTheme.color[props.color];
    }
    return '';
  },
  borderRadius: function borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return _theme["default"].borderRadius;
    }
    if (props.shape === 'sharpEdged') {
      return '0';
    }
    if (props.shape === 'capsular') {
      return _theme["default"].px(10);
    }
    if (props.shape === 'circular') {
      return '100%';
    }
    return '';
  },
  pointerEvents: function pointerEvents(props) {
    if (props.disabled) {
      return 'none';
    }
    return '';
  },
  opacity: function opacity(props) {
    if (props.disabled) {
      return '0.5';
    }
    return '';
  },
  hover: {
    color: function color(props) {
      var lTheme = props.theme.color ? props.theme : _theme["default"];
      if (props.kind === 'filled') {
        return lTheme.color.white;
      }
      if (props.kind === 'outlined') {
        return lTheme.color.white;
      }
      return '';
    },
    backgroundColor: function backgroundColor(props) {
      var lTheme = props.theme.color ? props.theme : _theme["default"];
      if (props.kind === 'filled') {
        return lTheme.color["".concat(props.color, "Dark")];
      }
      if (props.kind === 'outlined') {
        return lTheme.color[props.color];
      }
      return '';
    },
    borderColor: function borderColor(props) {
      var lTheme = props.theme.color ? props.theme : _theme["default"];
      if (props.kind === 'filled') {
        return lTheme.color["".concat(props.color, "Dark")];
      }
      if (props.kind === 'outlined') {
        return lTheme.color[props.color];
      }
      return '';
    }
  }
};
var StyledButton = (0, _styledComponents["default"])(function (_ref) {
  var color = _ref.color,
    kind = _ref.kind,
    size = _ref.size,
    shape = _ref.shape,
    fluid = _ref.fluid,
    isLoading = _ref.isLoading,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("button", props);
}).withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-oby1ng-0"
})(["display:inline-flex;align-items:center;justify-content:center;cursor:pointer;text-transform:uppercase;color:", ";font-size:", ";background-color:", ";padding:", ";width:", ";border-width:1px;border-style:solid;border-color:", ";border-radius:", ";pointer-events:", ";opacity:", ";&:hover{color:", ";background-color:", ";border-color:", ";}"], styles.color, styles.fontSize, styles.backgroundColor, styles.padding, function (props) {
  return props.fluid ? '100%' : '';
}, styles.borderColor, styles.borderRadius, styles.pointerEvents, styles.opacity, styles.hover.color, styles.hover.backgroundColor, styles.hover.borderColor);
function Button(_ref2) {
  var label = _ref2.label,
    disabled = _ref2.disabled,
    className = _ref2.className,
    clickCbk = _ref2.clickCbk,
    spin = _ref2.spin,
    props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
  return /*#__PURE__*/_react["default"].createElement(StyledButton, (0, _extends2["default"])({}, props, {
    disabled: disabled,
    className: (0, _classnames["default"])(className),
    onClick: clickCbk
  }), spin ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "fa-solid fa-spinner",
    spin: true,
    className: "disabled-spiner"
  }), "\xA0\xA0") : null, label);
}
Button.propTypes = {
  label: _propTypes["default"].string,
  clickCbk: _propTypes["default"].func,
  type: _propTypes["default"].oneOf(['submit', 'button']),
  kind: _propTypes["default"].oneOf(['filled', 'outlined']),
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  shape: _propTypes["default"].oneOf(['bluntEdged', 'sharpEdged', 'capsular', 'circular']),
  fluid: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  spin: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
Button.defaultProps = {
  label: 'Button',
  clickCbk: function clickCbk() {},
  type: 'submit',
  kind: 'filled',
  size: 'medium',
  shape: 'bluntEdged',
  fluid: false,
  disabled: false,
  spin: false,
  className: ''
};
var _default = exports["default"] = Button;