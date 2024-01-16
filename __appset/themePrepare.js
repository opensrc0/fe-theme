/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { mkdirp } = require('mkdirp');

const ignoreFiles = [
  '.DS_Store',
  'scripts',
  'utils',
  'themePrepare.js',
  'universal',
];

const mergeObj = (obj1, obj2) => ({ ...obj1, ...obj2 });

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const color = [
  { name: 'FgRed', value: '\x1b[31m%s\x1b[0m' },
  { name: 'FgGreen', value: '\x1b[32m%s\x1b[0m' },
  { name: 'FgYellow', value: '\x1b[33m%s\x1b[0m' },
  { name: 'FgMagenta', value: '\x1b[35m%s\x1b[0m' },
  { name: 'FgCyan', value: '\x1b[36m%s\x1b[0m' },
];

let count = 0;

// generate exports for all platforms
const srcPath = path.resolve(__dirname, '../__appset');
const components = process.env.COMPONENET_NAME ? [`${process.env.COMPONENET_NAME}.js`] : fs.readdirSync(srcPath).filter((files) => !ignoreFiles.includes(files) && !files.includes('WIP-'));

const srcPathInner = path.resolve(__dirname, '../__appset/universal');
const componentsInner = process.env.COMPONENET_NAME ? [] : fs.readdirSync(srcPathInner).filter((files) => !ignoreFiles.includes(files) && !files.includes('WIP-'));

let createDir;
let createInnerDir;

if (process.env.ENVI === 'local') {
  createDir = `${process.env.CURRENT_APP_DIR}/${process.env.COMPONENT_CONFIG_PATH}/fe-theme`;
  createInnerDir = `${process.env.CURRENT_APP_DIR}/${process.env.COMPONENT_CONFIG_PATH}/fe-theme/universal`;
} else {
  createDir = path.resolve(`${__dirname}`, `../../../${process.env.COMPONENT_CONFIG_PATH}/fe-theme`);
  createInnerDir = path.resolve(`${__dirname}`, `../../../${process.env.COMPONENT_CONFIG_PATH}/fe-theme/universal`);
}

mkdirp(createDir).then(() => {
  components.map((component) => {
    let defaultDir;
    let appDir;
    let defaultDirData;
    let componentFile;
    const replaceComponentName = component.replace('config', '').replace('.js', '');

    if (process.env.ENVI === 'local') {
      defaultDir = path.resolve(`${__dirname}`);
      defaultDirData = fs.readFileSync(`${defaultDir}/${component}`).toString().split('export')[0].split(/=(.*)/s)[1];
      appDir = `${process.env.CURRENT_APP_DIR}/${process.env.COMPONENT_CONFIG_PATH}/fe-theme`;
      componentFile = `${appDir}/${component}`;
    } else {
      defaultDir = path.resolve(`${__dirname}`, '../../../node_modules/fe-theme/__appset');
      defaultDirData = fs.readFileSync(`${defaultDir}/${component}`).toString().split('export')[0].split(/=(.*)/s)[1];
      appDir = path.resolve(`${__dirname}`, `../../../${process.env.COMPONENT_CONFIG_PATH}/fe-theme`);
      componentFile = path.resolve(createDir, component);
    }

    fs.readFile(`${appDir}/${component}`, 'utf8', (err, data) => {
      let componentContent;

      if (!err) {
        const userAppConfig = data.split('export')[0].split(/=(.*)/s)[1];
        componentContent = `/* eslint-disable */
const ${replaceComponentName} = ${JSON.stringify(mergeObj(JSON.parse(defaultDirData), JSON.parse(userAppConfig)), null, '\t')}
\nexport default ${replaceComponentName};\n`;
      } else {
        componentContent = `/* eslint-disable */
const ${replaceComponentName} =${defaultDirData}export default ${replaceComponentName};\n`;
      }

      fs.writeFile(componentFile, componentContent, (writeFileErr) => {
        if (writeFileErr) throw writeFileErr;
        console.log(color[getRandomInt(color.length)].value, ` ${count + 1}. generated: ${componentFile} \n`);
        count += 1;
        if (count === components.length + componentsInner.length - 2) {
          console.log('\x1b[44m%s\x1b[0m', 'Setup Completed Successfully');
          console.log('');
          count = 0;
        }
      });
    });

    return null;
  });
}).catch((err) => {
  console.log('err', err);
});

mkdirp(createInnerDir).then(() => {
  if (process.env.COMPONENET_NAME) {
    let appDir;
    let componentFile;
    const replaceComponentName = process.env.COMPONENET_NAME.replace('config', '').replace('.js', '');

    if (process.env.ENVI === 'local') {
      appDir = `${process.env.CURRENT_APP_DIR}/${process.env.COMPONENT_CONFIG_PATH}/fe-theme/universal`;
      componentFile = `${appDir}/theme.js`;
    } else {
      appDir = path.resolve(`${__dirname}`, `../../../${process.env.COMPONENT_CONFIG_PATH}/fe-theme/universal`);
      componentFile = path.resolve(createInnerDir, 'theme.js');
    }
    fs.readFile(`${appDir}/theme.js`, 'utf8', (err, data) => {
      let componentContent;
      if (!err) {
        console.log('not error', data);
        componentContent = data.replace('const theme = {', `import ${replaceComponentName} from '../${process.env.COMPONENET_NAME}';
const theme = {
  ${replaceComponentName},`);
        if (!data.includes(`import ${replaceComponentName} from`)) {
          fs.writeFile(componentFile, componentContent, () => { });
        }
      } else {
        componentContent = `/* eslint-disable */
import ${replaceComponentName} from '../${process.env.COMPONENET_NAME}';
const theme = {
  ${replaceComponentName}
}

export default theme;\n`;
        fs.writeFile(componentFile, componentContent, () => { });
      }
    });
  } else {
    componentsInner.map((component) => {
      let defaultDir;
      let appDir;
      let defaultDirData;
      let componentFile;
      const replaceComponentName = component.replace('config', '').replace('.js', '');

      if (process.env.ENVI === 'local') {
        defaultDir = path.resolve(`${__dirname}`, 'universal');
        defaultDirData = fs.readFileSync(`${defaultDir}/${component}`).toString().split('export')[0].split(/=(.*)/s)[1];
        appDir = `${process.env.CURRENT_APP_DIR}/${process.env.COMPONENT_CONFIG_PATH}/fe-theme/universal`;
        componentFile = `${appDir}/${component}`;
      } else {
        defaultDir = path.resolve(`${__dirname}`, '../../../node_modules/fe-theme/__appset/universal');
        defaultDirData = fs.readFileSync(`${defaultDir}/${component}`).toString().split('export')[0].split(/=(.*)/s)[1];
        appDir = path.resolve(`${__dirname}`, `../../../${process.env.COMPONENT_CONFIG_PATH}/fe-theme/universal`);
        componentFile = path.resolve(createInnerDir, component);
      }

      fs.readFile(`${appDir}/${component}`, 'utf8', (err, data) => {
        if (component === 'theme.js' || component === 'configPXL.js') {
          fs.writeFile(componentFile, fs.readFileSync(`${defaultDir}/${component}`).toString(), () => {});
        } else {
          let componentContent;

          if (!err) {
            const userAppConfig = data.split('export')[0].split(/=(.*)/s)[1];
            componentContent = `/* eslint-disable */
  const ${replaceComponentName} = ${JSON.stringify(mergeObj(JSON.parse(defaultDirData), JSON.parse(userAppConfig)), null, '\t')}
  \nexport default ${replaceComponentName};\n`;
          } else {
            componentContent = `/* eslint-disable */
  const ${replaceComponentName} =${defaultDirData}export default ${replaceComponentName};\n`;
          }

          fs.writeFile(componentFile, componentContent, (writeFileErr) => {
            if (writeFileErr) throw writeFileErr;
            console.log(color[getRandomInt(color.length)].value, ` ${count + 1}. generated: ${componentFile} \n`);
            count += 1;
            if (count === components.length + componentsInner.length - 2) {
              console.log('\x1b[44m%s\x1b[0m', 'Setup Completed Successfully');
              console.log('');
              count = 0;
            }
          });
        }
      });

      return null;
    });
  }
}).catch((err) => {
  console.log('err', err);
});
