"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var ButtonComponent = _styledComponents["default"].button.withConfig({
  displayName: "Button__ButtonComponent",
  componentId: "sc-ywfgo9-0"
})(["color:#BF4F74;font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid #BF4F74;border-radius:3px;"]);
function Button(_ref) {
  var text = _ref.text;
  var onClick = function onClick() {
    console.log('hello');
  };
  return /*#__PURE__*/_react["default"].createElement(ButtonComponent, {
    type: "button",
    onClick: onClick
  }, text);
}
var _default = exports["default"] = Button;