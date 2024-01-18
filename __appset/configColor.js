const Color = {
  "default": {
    "bgColor": "#ffffff",
    "color": "#000000",
    "primary": "#00364e",
    "secondary": "#03567b"
  },
  "dark": {
    "bgColor": "#0a0a0a",
    "color": "#ffffff",
    "primary": "#0a0a0a",
    "secondary": "#1f1f1f"
  }
}

export default window && Color[localStorage.getItem("themeType")] ? Color[localStorage.getItem("themeType")] : Color.default

// "info": "#1976d2",
// "success": "#43a047",
// "warning": "#ffa000",
// "danger": "#d32f2f",
// "orange": "#fc6027"
