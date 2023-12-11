import React from 'react';
import { ThemeProvider } from 'styled-components';
import themeInit from '../Init';
import theme from '../__build-es/theme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={themeInit(theme)}>
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
