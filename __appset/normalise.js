import { createGlobalStyle } from 'styled-components';

const Normalise = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.Color.bgColor};
    color: ${(props) => props.theme.Color.color};
    font-size: ${(props) => props.theme.FontSize.s};
    font-weight: ${(props) => props.theme.FontWeight.normal};
    font-family: ${(props) => props.theme.FontFamily.roboto}, system-ui, sans-serif;
    margin: 0;
  }

  *,
  *::after,
  *::before {
    line-height: 1.2;
    box-sizing: inherit;
  }
`;

export default Normalise;
