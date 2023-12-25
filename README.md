<img src="readme.svg" style="width: 100%;" alt="Click to see the source">

FE-Theme is a styled-component based comprehensive library of accessible, reusable, and composable React components that streamlines the development of modern web applications and websites. The library offers a theme based UI to quickly start a new small/medium/large size web based applications.

## Table of contents

1. 📦 [Installation](#installation)
2. 💻 [Usage](#usage)
3. 📝 [Contributing](#contributing)
4. ✨ [Contributors](#contributors)
5. ⚖️ [License](#license)
  

  
## Installation

    npm install fe-theme --save

## Usage

#### 1. Creating a fe-theme folder in the root directory of you application. It contains configuration files of fe-theme component like Button, Input etc.

    npm run theme-prepare --prefix ./node_modules/fe-theme

#### 2. Passing universal configuration like color properties, font family properties, to the fe-theme library using ThemeProvider (For internal usage only but required)

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from '{root-location-of-your-project}/fe-theme/universal/theme'; // root-location-of-your-project is dynamic variable
import App from './App';

ReactDOM.hydrate(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
```

#### 3. Setup is completed, Now import UI component in your application like button
```js
import Button from 'fe-theme/Button';

<Button />
```

Hurrah...!!! Button is created, but button theme does not match with the your application. No worries. You can change default properties of button component
  

```
Your Application Folder(Root Directory)
  └──fe-theme                       
    ├──configButton           
    ├──configInput          
    └──configChip    
     
```
Play around the property of button according to your project.


## Contributing

Feel like contributing? Most welcome! 
Follow this quick [setup and guide lines](./.github/CONTRIBUTING.md) to get fe-theme working on your local machine and contribute.



## Contributors

Thanks goes to these wonderful people

<table>
    <tbody>
      <tr>
        <td align="center" valign="top" width="14.28%">
          <a href="https://github.com/opensrc0">
            <img src="https://avatars.githubusercontent.com/u/6891544?s=400&v=4" width="64px;" alt="Himanshu Gupta" />
            <br />
            <sub><b>Himanshu Gupta</b></sub>
          </a>
          <br />
        </td>
        <td align="center" valign="top" width="14.28%">
          <a href="https://github.com/ashwinihegde123">
            <img src="https://avatars.githubusercontent.com/u/40521396?v=4" width="64px;" alt="Ashwini Hegde" />
            <br />
            <sub><b>Ashwini Hegde</b></sub>
          </a>
          <br />
        </td>
        <td align="center" valign="top" width="14.28%">
          <a href="https://github.com/vineet091">
            <img src="https://avatars.githubusercontent.com/u/5345138?v=4" width="64px;" alt="Vineet Gupta" />
            <br />
            <sub><b>Vineet Gupta</b></sub>
          </a>
          <br />
        </td>
        <td align="center" valign="top" width="14.28%">
          <a href="https://github.com/Alok30">
            <img src="https://avatars.githubusercontent.com/u/36290248?s=64&v=4" width="64px;" alt="Alok Dubey" />
            <br />
            <sub><b>Alok Dubey</b></sub>
          </a>
          <br />
        </td>
        <td align="center" valign="top" width="14.28%">
          <a href="https://github.com/Ravi-Chef">
            <img src="https://avatars.githubusercontent.com/u/31059087?v=4" width="64px;" alt="Ravi Verma" />
            <br />
            <sub><b>Ravi Verma</b></sub>
          </a>
          <br />
        </td>
        <td align="center" valign="top" width="14.28%">
          <a target="_blank" href="https://github.com/semantic-release-bot">
            <img src="https://avatars.githubusercontent.com/u/32174276?v=4" width="64px;" alt="Semantic Release Bot" />
            <br />
            <sub><b>Semantic Release Bot</b></sub>
          </a>
          <br />
        </td>
        <td align="center" valign="top" width="14.28%">
          <a target="_blank" href="https://github.com/Ghanshyam-K-Dobariya">
            <img src="https://avatars.githubusercontent.com/u/5426993?s=400" width="64px;" alt="Ghanshyam KD" />
            <br />
            <sub><b>Ghanshyam KD</b></sub>
          </a>
          <br />
        </td>
      </tr>
      <tr>
        <td align="center" valign="top" width="14.28%">
          <a target="_blank" href="https://github.com/fossabot">
            <img src="https://avatars.githubusercontent.com/u/29791463?v=4" width="64px;" alt="Fossa Bot" />
            <br />
            <sub><b>Fossa Bot</b></sub>
          </a>
          <br />
        </td>
      </tr>
    </tbody>
</table>



## License

MIT © [Himanshu Gupta](https://github.com/opensrc0)
