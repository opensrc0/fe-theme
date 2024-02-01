const Color = {
  "default": {
    "bgColor": "#ffffff",
    "color": "#000000",

    "primary": "#00364e",
    "secondary": "#03567b"
  },
  "dark": {
    "bgColor": "#111111",
    "color": "#ffffff",

    "primary": "#111111",
    "secondary": "#4d4d4d"
  }
}

export default window && Color[localStorage.getItem("themeType")] ? Color[localStorage.getItem("themeType")] : Color.default

// "info": "#1976d2",
// "success": "#43a047",
// "warning": "#ffa000",
// "danger": "#d32f2f",
// "orange": "#fc6027"

// #111
// #1e1e1e
// #3c3c3c
// #4d4d4d
