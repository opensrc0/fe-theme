<p align="center">
  <a href="https://github.com/hg-arch/fe-theme">
    <img src="https://png.pngtree.com/png-clipart/20220103/original/pngtree-show-biceps-png-image_7019290.png" alt="FE-Theme Logo" width="100" />
  </a>
</p>

<h1 align="center">Build theme based React Apps using built-in Styled Component 💪 </h1>
<br />

<p align="center">
 
  <a href="https://github.com/hg-arch/fe-theme/blob/master/LICENSE.md">
    <img alt="MIT License" src="https://img.shields.io/github/license/fe-theme/fe-theme"/>
  </a>
 
 
 
 
 
</p>

<br />

FE-Theme is a styled-component based comprehensive library of accessible, reusable, and composable React components that streamlines the development of modern web applications and websites. The library offers a theme based UI to quickly start a new small/medium/large size web based applications.

## Installation

    npm install fe-theme --save

## Setup

#### 1. Importing UI component in your application
```js
import Button from 'fe-theme/Button';
```

```js
<Button />
```
Hurrah...!!! Button is created, but color does not match with the application. No worries.
  

#### 2. Do you want to change theme according to your application?
##### Generate a sample file(sample-theme.js) by running below commond in terminal in your project location.

```cp sample-theme.js ./```

##### Or

##### Create a file sample-theme.js in the root folder and add below code
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
```


#### 3. Bootstrap theme by calling a ```themeInit```  function and pass it to ```ThemeProvider``` in ```theme``` property

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

#### 4. Go to the sample-theme.js and change the theme like primary: '#000', secondary: '#333'
```js
<Button design="primary" />
<Button design="secondary" />
```

## Contributors

Thanks goes to these wonderful people

<table>
    <tbody>
      <tr>
        <td align="center" valign="top" width="14.28%">
          <a href="https://github.com/hg-arch">
            <img src="https://avatars.githubusercontent.com/u/6891544?s=400&v=4" width="64px;" alt="Mark Chandler" />
            <br />
            <sub><b>Himanshu Gupta</b></sub>
          </a>
          <br />
        </td>
        <td align="center" valign="top" width="14.28%">
          <a href="https://github.com/Alok30">
            <img src="https://avatars.githubusercontent.com/u/36290248?s=64&v=4" width="64px;" alt="Folasade Agbaje" />
            <br />
            <sub><b>Alok Dubey</b></sub>
          </a>
          <br />
        </td>
        <td align="center" valign="top" width="14.28%">
          <a href="https://github.com/Ravi-Chef">
            <img src="https://avatars.githubusercontent.com/u/31059087?v=4" width="64px;" alt="Christian Nwamba" />
            <br />
            <sub><b>Ravi Verma</b></sub>
          </a>
          <br />
        </td>
      </tr>
    </tbody>
</table>

### License

MIT © [Himanshu Gupta](https://github.com/hg-arch)
