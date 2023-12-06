# fe-theme

   #### A react component based library for web/mobile designed and created for large scale application using styled-components

# Installation

    npm install fe-theme --save

# Setup

### 1. Importing UI component in your application
```js
import Button from 'fe-theme/Button';
```

```js
<Button />
```
Hurrah...!!! Button is created, but color does not match with the application. No worries.
  

### 2. Do you want to change theme according to your application?
#### Generate a sample file(sample-theme.js) by running below commond in terminal in your project location.

```cp sample-theme.js ./```

#### Or

#### Create a file sample-theme.js in the root folder and add below code
```js
const theme = {};

theme.color = {
  primary: '#00364e',
  secondary: '#03567b',

  white: '#ffffff',
  black: '#000000',

  info: '#1976d2',
  success: '#43a047',
  warning: '#ffa000',
  danger: '#d32f2f',
  orange: '#fc6027',
};

theme.fontFamily = {};
theme.fontSize = {};
theme.fontWeight = {};
theme.display = {};
theme.borderRadius = '';
theme.pxScale = '';

export default theme;
```


### 3. Bootstrap theme by calling a ```themeInit```  function and pass it to ```ThemeProvider``` in ```theme``` property

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import themeInit from 'fe-theme/Init';
import theme from './sample-theme.js';
import App from './App';

ReactDOM.hydrate(
    <ThemeProvider theme={themeInit(theme)}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'),
);
```

### 4. Go to the sample-theme.js and change the theme like primary: '#000', secondary: '#333'
```js
<Button design="primary" />
<Button design="secondary" />
```


