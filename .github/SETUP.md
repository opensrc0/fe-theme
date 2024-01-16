# Setup
Clone the repository and run the following commands from the root directory   

## Local setup

#### 1. Go to the fe-theme repo location in your terminal and do 
```
npm install
```
```
npm start

```
#### 2. Open terminal and Go to any ```working react application``` in your system, where you want to ```implement FE-Theme```

```js
npm link {PATH}/fe-theme/ {PATH}/fe-theme/node_modules/styled-components/ {PATH}/fe-theme/node_modules/react {PATH}/fe-theme/node_modules/react-dom 
```
**Note:** PATH is the location of cloned fe-theme folder

#### 3. Last step to get config folder(fe-theme) contains config files of each component in your project repo 

Create config file for all the component of fe-theme
```js
COMPONENT_CONFIG_PATH=./{location of fe-theme configuration folder in your application} ENVI=local CURRENT_APP_DIR=$(pwd) npm run theme-prepare --prefix ./node_modules/fe-theme
```

Create config file for a single component of fe-theme
```js
COMPONENET_NAME=button COMPONENT_CONFIG_PATH=./{location of fe-theme configuration folder in your application} ENVI=local CURRENT_APP_DIR=$(pwd)  npm run theme-prepare --prefix ./node_modules/fe-theme
```
**Note:** 
```COMPONENT_CONFIG_PATH``` is a variable and setup it properly.
```COMPONENET_NAME``` is the component Name

#### 4. Pass theme config to ThemeProvider 
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Init from 'fe-theme/Init';
import theme from '{PATH}/fe-theme/universal/theme';  // Include your theme to fe-theme
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={Init(theme)}>
    <App />
  </ThemeProvider>
);
```

#### 5. Hurrah...! Now fe-theme repo is available inside the node_modules of your project, and waching change in fe-theme.


<!-- # open http://localhost:6006 -->

## Folder Structure

```
fe-theme
  └── __application      
    └── component                   
      ├──Button                 (component name)
      |   ├──index.js           (top level exports/re-exports)
      |   ├──Button.js          (Button implementation)
      |   └──Button.story.js    (Story for Button)
  └── __appset
    ├──configButton.js                (Config File of Button)
    ├──configChip.js                  (Config File of Chip)
    ├──configInput.js                 (Config File of Input)
    ├── universal                         (Universal Component Folder)
    |     ├──configColor.js               (Config File for Application Color)
    |     ├──configFontFamily.js          (Config File for Application FontFamily)
    |     ├──configFontSize.js            (Config File for Application FontSize)
    |     ├──configFontWeight.js          (Config File for Application FontWeight)
    |     └──configPXL.js                 (Config File contain PXL function for Spacing in the application)
      
```
