import fontColor from './font/fontColorConst';
import fontFamily from './font/fontFamilyConst';
import fontSize from './font/fontSizeConst';
import fontWeight from './font/fontWeightConst';

const theme = { component: {} };
theme.color = fontColor;
theme.fontFamily = fontFamily;
theme.fontSize = fontSize;
theme.fontWeight = fontWeight;
theme.display = {
  block: 'block',
  inline: 'inline',
  flex: 'flex',
  inlineBlock: 'inline-block',
  table: 'table',
  tableCell: 'table-cell',
  none: 'none',
};

theme.cornerEdge = '8px';

theme.pxScale = 8;

theme.px = (value) => {
  const values = [].concat(value);
  return values
    .map((v) => typeof v === 'string' ? v : `${v * theme.pxScale}px`)
    .join(' ');
};
theme.toString = (value) => (!value || typeof value === 'string') ? value : value.toString();

theme.component.Button = {
  borderRadius: '4px',
  primary: {
    color: 'white',
    borderColor: 'white',
  },
  secondary: {
    color: 'white',
    borderColor: 'white',
  },
  tertiary: {
    color: 'white',
    borderColor: 'white',
  },
  quaternary: {
    color: 'white',
    borderColor: 'white',
  },
};

theme.component.TextBox = {
  borderRadius: '4px',
  primary: {
    borderColor: 'white',
  },
  secondary: {
    borderColor: 'white',
  },
  tertiary: {
    borderColor: 'white',
  },
  quaternary: {
    borderColor: 'white',
  },
};

export default theme;
