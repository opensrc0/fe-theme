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

    component: {
      ...defaultTheme.component,
      ...userTheme?.component,
      Button: {
        ...defaultTheme.component.Button,
        ...userTheme?.component?.Button,
        primary: {
          ...defaultTheme.component.Button.primary,
          ...userTheme?.component?.Button?.primary,
        },
        secondary: {
          ...defaultTheme.component.Button.secondary,
          ...userTheme?.component?.Button?.secondary,
        },
        tertiary: {
          ...defaultTheme.component.Button.secondary,
          ...userTheme?.component?.Button?.secondary,
        },
        quaternary: {
          ...defaultTheme.component.Button.secondary,
          ...userTheme?.component?.Button?.secondary,
        },
      },
    },
  };

  return mergeTheme;
}
