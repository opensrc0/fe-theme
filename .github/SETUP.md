# Setup
Clone the repository and run the following commands from the root directory   

## Local setup

1. Go to the fe-theme repo location in your terminal and do 
```
npm install

```
```
npm start

```
3. Go to your project location in terminal and link cloned repo of fe-theme with your project
```
npm link {fe-theme-repo-location}/fe-theme

```

4. Last step to get config folder(fe-theme) contains config files of each component in your project repo 
```
ENVI=local CURRENT_APP_DIR=$(pwd) COMPONENT_CONFIG_PATH=./{location of fe-theme component configuration folder in your application} npm run theme-prepare --prefix ./node_modules/fe-theme

```

**Note:** ```COMPONENT_CONFIG_PATH``` is a variable and set it properly.

5. Hurrah...! Now fe-theme repo is available inside the node_modules of your project, and waching change in fe-theme.


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
