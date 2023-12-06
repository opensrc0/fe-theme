"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _fontColorConst = _interopRequireDefault(require("./font/fontColorConst"));
var _fontFamilyConst = _interopRequireDefault(require("./font/fontFamilyConst"));
var _fontSizeConst = _interopRequireDefault(require("./font/fontSizeConst"));
var _fontWeightConst = _interopRequireDefault(require("./font/fontWeightConst"));
var theme = {};
theme.color = _fontColorConst["default"];
theme.fontFamily = _fontFamilyConst["default"];
theme.fontSize = _fontSizeConst["default"];
theme.fontWeight = _fontWeightConst["default"];
theme.display = {
  block: 'block',
  inline: 'inline',
  flex: 'flex',
  inlineBlock: 'inline-block',
  table: 'table',
  tableCell: 'table-cell',
  none: 'none'
};
theme.borderRadius = '2px';
theme.pxScale = 8;
theme.px = function (value) {
  var values = [].concat(value);
  return values.map(function (v) {
    return typeof v === 'string' ? v : "".concat(v * theme.pxScale, "px");
  }).join(' ');
};
theme.toString = function (value) {
  return !value || typeof value === 'string' ? value : value.toString();
};
var _default = exports["default"] = theme;