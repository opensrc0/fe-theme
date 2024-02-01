const { defaultColor, darkColor } = {
  "defaultColor": {
    "primary": "#00364e",
    "secondary": "#03567b",
    "bgColor": "#fff",
    "color": "#111"
  },
  "darkColor": {
    "primary": "#111",
    "secondary": "#181818",
    "bgColor": "#1f1f1f",
    "color": "#fff"
  }
}

const MixedColor = {
  "themeColor": defaultColor.secondary,

  "black": darkColor.primary,
  "white": "#fff",

  "info": "#1976d2",
  "success": "#43a047",
  "warning": "#ffa000",
  "danger": "#d32f2f"
}

export default { ...(window && localStorage.getItem("themeType") ? darkColor : defaultColor), ...MixedColor }
