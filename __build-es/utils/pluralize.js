"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = function _default(amount, singularForm) {
  var pluralForm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "".concat(singularForm, "s");
  var word = '';
  if (+amount === 1) {
    word = singularForm;
  } else {
    word = pluralForm;
  }
  return word;
};