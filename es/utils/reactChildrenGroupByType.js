"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _default = exports["default"] = function _default(children) {
  var childrenGroupByType = {};
  _react["default"].Children.forEach(children, function (child) {
    if (child) {
      childrenGroupByType[child.type] = childrenGroupByType[child.type] || [];
      childrenGroupByType[child.type].push(child);
    }
  });
  return childrenGroupByType;
};