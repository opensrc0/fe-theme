"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _default = exports["default"] = function _default(children) {
  var childrenByType = {};
  _react["default"].Children.forEach(children, function (child) {
    if (child) {
      childrenByType[child.type] = child;
    }
  });
  return childrenByType;
};