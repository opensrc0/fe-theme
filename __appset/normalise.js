import { createGlobalStyle } from "styled-components"

const Normalise = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.Universal.Color.bgColor};
    color: ${(props) => props.theme.Universal.Color.color};
    font-size: ${(props) => props.theme.Universal.FontSize.s};
    font-weight: ${(props) => props.theme.Universal.FontWeight.normal};
    font-family: ${(props) => props.theme.Universal.FontFamily.roboto}, system-ui, sans-serif;
    margin: 0;
  }

  *,
  *::after,
  *::before {
    line-height: 1.2;
    box-sizing: inherit;
  }
`

export default Normalise
