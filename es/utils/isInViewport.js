"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _getDeviceDimensions = _interopRequireDefault(require("./getDeviceDimensions"));
var _default = exports["default"] = function _default(element) {
  if (element) {
    var boundingClientRect = element.getBoundingClientRect();
    var deviceDimensions = (0, _getDeviceDimensions["default"])();
    var isInViewportVertically = boundingClientRect.top <= deviceDimensions.height && boundingClientRect.bottom >= 0;
    var isInViewportHorizontally = boundingClientRect.left <= deviceDimensions.width && boundingClientRect.right >= 0;
    return isInViewportVertically && isInViewportHorizontally;
  }
  return false;
};