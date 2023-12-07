import defaultTheme from './../theme';

export default function Init(userTheme) {
  const mergeTheme = {
    color: {
      ...defaultTheme.color,
      ...userTheme?.color,
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      ...userTheme?.fontFamily,
    },
    fontSize: {
      ...defaultTheme.fontSize,
      ...userTheme?.fontSize,
    },
    fontWeight: {
      ...defaultTheme.fontWeight,
      ...userTheme?.fontWeight,
    },

    display: {
      ...defaultTheme.display,
      ...userTheme?.display,
    },

    cornerEdge: userTheme?.cornerEdge || defaultTheme.cornerEdge,

    pxScale: userTheme?.pxScale || defaultTheme.pxScale,

    px: userTheme?.px || defaultTheme.px,
  };

  return mergeTheme;
}
