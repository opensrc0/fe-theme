/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import fs from 'fs';
import path from 'path';
import { ignoreFiles, color } from './constants.js';

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const getDirPath = (env, CURRENT_APP_DIR, COMPONENT_CONFIG_PATH) => {
  let createDir;

  if (env === 'local') {
    createDir = `${CURRENT_APP_DIR}/${COMPONENT_CONFIG_PATH}/fe-theme-config`;
  } else {
    createDir = path.resolve(`${__dirname}`, `../../${process.env.COMPONENT_CONFIG_PATH}/fe-theme-config`);
  }

  return createDir;
};

export const getComponents = (COMPONENT_NAME) => {
  const srcPath = path.resolve('__appset');

  return COMPONENT_NAME ?
    ['configColor.js'].concat(COMPONENT_NAME.split(',').map((v) => `config${capitalizeFirstLetter(v)}.js`)) :
    fs.readdirSync(srcPath).filter((files) => !ignoreFiles.includes(files));
};

export const setUpCompletedLog = (index, length) => {
  if (index + 1 === length) {
    console.log('\x1b[44m%s\x1b[0m', 'Setup Completed Successfully');
    console.log('');
  }
};

export const fileGeneratedLog = (index, fileName, isAlreadyExist) => {
  console.log(color[getRandomInt(color.length)].value, ` ${index + 1}. ${isAlreadyExist ? 'AlreadyExist' : 'Generated'}: ${fileName} \n`);
};

export const addComponentInNewThemeFile = async (component, themeFile) => {
  const componentWithOutConfig = component.replace('config', '').replace('.js', '');

  const componentContent = `/* eslint-disable */
import ${componentWithOutConfig} from './${component}';
const theme = {
  ${componentWithOutConfig}
}

export default theme;`;

  await fs.promises.writeFile(themeFile, componentContent, () => { });
};

export const addComponentInExistingThemeFile = (component, themeFile, data) => {
  const componentWithOutConfig = component.replace('config', '').replace('.js', '');

  const componentContent = data.replace('const theme = {', `import ${componentWithOutConfig} from './${component}';
const theme = {
  ${componentWithOutConfig},`);
  if (!data.includes(`import ${componentWithOutConfig} from`)) {
    fs.promises.writeFile(themeFile, componentContent, () => { });
  }
};

export const isFileExist = async (appDir, component) => {
  try {
    await import(`${appDir}/${component}`);
    return true;
  } catch (err) {
    return false;
  }
};
