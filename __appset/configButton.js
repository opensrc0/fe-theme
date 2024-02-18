import configColor from './configColor';

const Button = {
  primary: {
    color: configColor.white,
    background: configColor.themeColor,
    borderColor: configColor.themeColor,
    borderRadius: '4px',
  },
  secondary: {
    color: configColor.white,
    background: configColor.themeColor,
    borderColor: configColor.themeColor,
    borderRadius: '4px',
  },
  outlined: {
    color: configColor.themeColor,
    bgColor: configColor.white,
    borderColor: configColor.themeColor,
    borderRadius: '14px',
  },
  size: {
    s: {
      fontSize: 'xs',
      padding: [1, 2],
    },
    m: {
      fontSize: 's',
      padding: [1.5, 2],
    },
    l: {
      fontSize: 's',
      padding: [2, 2.5],
    },
  },
  extraProps: {},
};

export default Button;
