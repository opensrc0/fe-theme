<p align="center">
  <a href="https://github.com/opensrc0/fe-theme">
    <img src="https://png.pngtree.com/png-clipart/20220103/original/pngtree-show-biceps-png-image_7019290.png" alt="FE-Theme Logo" width="100" />
  </a>
</p>
<h2 align="center">A React UI library using styled-component to build consistent, responsive, theme able UI 💪 </h2>
<br />
<p align="center">
   <a href="https://www.npmjs.com/package/fe-theme">
     <img alt="Minified Size" src="https://badgen.net/bundlephobia/minzip/fe-theme?color=cyan"/>
   </a>
  <a href="https://styled-components.com/releases#v6.1.1">
    <img alt="Styled Component Version" src="https://img.shields.io/badge/styled_component-6.1.1-%2350c62a"/>
  </a>
  <a href="https://react.dev/reference/react">
    <img alt="React Version" src="https://img.shields.io/badge/react-18.2.0-%23f1e05a"/>
  </a>
   
  <a href="https://github.com/opensrc0/fe-theme/stargazers">
    <img alt="Github Stars" src="https://badgen.net/github/stars/opensrc0/fe-theme?icon=github&color=purple"/>
  </a>
  <a href="https://www.npmjs.com/package/fe-theme">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dw/fe-theme?label=Downloads&logo=npm"/>
  </a>
  <a href="https://www.npmjs.com/package/fe-theme/v/latest">
    <img alt="Latest Release" src="https://badgen.net/github/release/opensrc0/fe-theme?icon=github&color=pink"/>
  </a>
  <a href="https://github.com/opensrc0/fe-theme/blob/master/LICENSE.md">
    <img alt="MIT License" src="https://badgen.net/static/license/MIT/orange"/>
  </a>
</p>
<br />

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

#### 1. Importing UI component in your application
```js
import Button from 'fe-theme/Button';
```

```js
<Button />
```
Hurrah...!!! Button is created, but color does not match with the application. No worries.
  

#### 2. Do you want to change theme according to your application?
##### Copy the default setup from fe-theme to your proeject repo in root location

```npm run theme-prepare --prefix ./node_modules/fe-theme```



#### 4. Open the config file of the component and play around with the property like in case of button primary button color to : '#000' and secondary button color to '#333'

```js
<Button design="primary" />
<Button design="secondary" />
```

#### 5. As simple as that. Setup finished.

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

### License

MIT © [Himanshu Gupta](https://github.com/opensrc0)
