"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/* eslint-disable no-console */
var fs = require('fs');
var path = require('path');
var _require = require('mkdirp'),
  mkdirp = _require.mkdirp;
var ignoreFiles = ['.DS_Store', 'scripts', 'utils'];

// generate exports for all platforms
var srcPath = path.resolve(__dirname, '../');
var components = fs.readdirSync(srcPath).filter(function (files) {
  return !ignoreFiles.includes(files);
});
components.forEach(function (component) {
  var componentDir = path.resolve(__dirname, "../../".concat(component));
  console.log(componentDir);
  mkdirp(componentDir).then(function (mkdirpErr) {
    if (mkdirpErr) throw mkdirpErr;
    var componentFile = path.resolve(componentDir, 'index.js');
    var componentContent = "export { default } from '../es/".concat(component, "';\nexport * from '../es/").concat(component, "';\n");
    fs.writeFile(componentFile, componentContent, function (writeFileErr) {
      if (writeFileErr) throw writeFileErr;
      console.log("generated: ".concat(componentFile));
    });
  });
});

// generate package.json
var packageJsonPath = path.resolve(__dirname, '../../package.json');
fs.readFile(packageJsonPath, 'utf-8', function (readFileErr, packageJsonData) {
  if (readFileErr) throw readFileErr;
  var packageJson = JSON.parse(packageJsonData);
  var newPackageJson = _objectSpread(_objectSpread({}, packageJson), {}, {
    files: ['cjs/**/*', 'es/**/*'].concat((0, _toConsumableArray2["default"])(components.map(function (component) {
      return "".concat(component, "/**/*");
    })), ['theme.js'])
  });
  console.log(newPackageJson);
  fs.writeFile(packageJsonPath, JSON.stringify(newPackageJson, null, 2), function (writeFileErr) {
    if (writeFileErr) throw writeFileErr;
    console.log('generated: package.json');
  });
});