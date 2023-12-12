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
3. Go to your project and link the fe-theme repo inside node_modules folder in your project
```
npm link {your_project_location}/fe-theme

```
4. Hurrah...! Now you have a setup of local fe-theme repo in your project, and waching change in fe-theme.


<!-- # open http://localhost:6006 -->

## Folder Structure

```
fe-theme
  └──__application      
    └──component                   
      ├──Button                 (component name)
      |   ├──index.js           (top level exports/re-exports)
      |   ├──Button.js          (Button implementation)
      |   └──Button.story.js    (Story for Button)
```
