"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _fontColorConst = _interopRequireDefault(require("../theme/font/fontColorConst"));
var _excluded = ["partitionXS", "children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Partition = (0, _styledComponents["default"])(function (_ref) {
  var partitionXS = _ref.partitionXS,
    children = _ref.children,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].cloneElement(children, props);
}).withConfig({
  displayName: "Partition",
  componentId: "sc-rhe8gf-0"
})(["&&&{@media (max-width:767px){", "}}"], function (props) {
  return [props.partitionXS && (0, _styledComponents.css)(["border-bottom:8px solid #e9ebee;background-color:", ";"], _fontColorConst["default"].white)];
});
Partition.propTypes = {
  partitionXS: _propTypes["default"].bool
};
var _default = exports["default"] = Partition;