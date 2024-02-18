/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import fs from 'fs';
import path from 'path';
import { mkdirp } from 'mkdirp';
import {
  getDirPath,
  getComponents,
  isFileExist,
  setUpCompletedLog,
  fileGeneratedLog,
  addComponentInExistingThemeFile,
  addComponentInNewThemeFile,
} from './../__application/utils/utils';

const ENVIRONMENT = process.env.ENVI;
const { CURRENT_APP_DIR } = process.env; // My project Location
const { COMPONENT_CONFIG_PATH } = process.env; // Where to place in My project Location
const { COMPONENT_NAME } = process.env;

let appDir;
if (ENVIRONMENT === 'local') {
  appDir = `${CURRENT_APP_DIR}/${COMPONENT_CONFIG_PATH}fe-theme`;
} else {
  appDir = path.resolve(`${__dirname}`, `../../../${process.env.COMPONENT_CONFIG_PATH}fe-theme`);
}

const manageThemeFile = async (component, dirPath) => {
  const themeFile = process.env.ENVI === 'local' ? `${appDir}/theme.js` : path.resolve(dirPath, 'theme.js');

  try {
    const data = await fs.promises.readFile(`${appDir}/theme.js`, 'utf8');
    addComponentInExistingThemeFile(component, themeFile, data);
  } catch (err) {
    await addComponentInNewThemeFile(component, themeFile);
  }
};

const dirPath = getDirPath(ENVIRONMENT, CURRENT_APP_DIR, COMPONENT_CONFIG_PATH);
const components = getComponents(COMPONENT_NAME);

mkdirp(dirPath).then(async () => {
  for (const component of components) {
    if (component !== 'theme.js' && component !== 'normalise.js' && component !== 'themePrepare copy.js') {
      await manageThemeFile(component, dirPath);
    }
  }

  components.map(async (component, index) => {
    const fileData = fs.readFileSync(`${path.resolve('__appset')}/${component}`).toString();
    const fileName = ENVIRONMENT === 'local' ? `${appDir}/${component}` : path.resolve(dirPath, component);

    if (await isFileExist(appDir, component)) {
      fileGeneratedLog(index, fileName, true);
      setUpCompletedLog(index, components.length);
      return false;
    }

    fs.writeFile(fileName, fileData, (writeFileErr) => {
      if (writeFileErr) throw writeFileErr;
      fileGeneratedLog(index, fileName, false);
      setUpCompletedLog(index, components.length);
    });

    return component;
  });
});
