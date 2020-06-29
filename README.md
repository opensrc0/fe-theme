# Getting Started
<br>

    npm install fe-theme

# Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'fe-theme/theme';
import App from './App';

ReactDOM.hydrate(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'),
);
  ```  




