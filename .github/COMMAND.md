&nbsp;&nbsp; ==> Create config file for all the component of fe-theme
```js
COMPONENT_CONFIG_PATH=./{PATH} CURRENT_APP_DIR=$(pwd) npm run theme-prepare --prefix ./node_modules/fe-theme
```

<p align="center">OR</p>

&nbsp;&nbsp; ==> Creating config file for an individual component
```js
COMPONENET_NAME={COMPONENT_NAME} COMPONENT_CONFIG_PATH=./{PATH} CURRENT_APP_DIR=$(pwd) npm run theme-prepare --prefix ./node_modules/fe-theme
```

&nbsp;&nbsp; **Note:** 

&nbsp;&nbsp;  ```1. PATH``` is a variable i.e. where you want to place config files in your application

&nbsp;&nbsp;  ```2. COMPONENT_NAME``` is a variable i.e. name of the component ```Input```, ```button```. [Find the component list](./COMPONENT.md)
