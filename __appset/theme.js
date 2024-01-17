/* eslint-disable import/no-anonymous-default-export */
import PXL from "./configPXL"
import Color from "./configColor"
import FontSize from "./configFontSize"
import FontFamily from "./configFontFamily"
import FontWeight from "./configFontWeight"

import Button from "./configButton"
import Input from "./configInput"

export default {
  "Universal": {
    ...PXL,
    Color,
    FontSize,
    FontFamily,
    FontWeight
  },
  Button,
  Input
}
