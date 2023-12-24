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

// generate exports for all platforms
const srcPath = path.resolve(__dirname, '../__appset');
const components = fs.readdirSync(srcPath).filter((files) => !ignoreFiles.includes(files) && !files.includes('WIP-'));
let count = 0;

// Prod:
const createDir = path.resolve(`${__dirname}`, '../../../fe-theme');

// Local
// const createDir = path.resolve(`${__dirname}`, '../../jio-fiber-chat-bot/fe-theme');

mkdirp(createDir).then(() => {
  components.map((component) => {
    // Prod:
    const defaultDir = path.resolve(`${__dirname}`, '../../../node_modules/fe-theme/__appset');

    // Local:
    // const defaultDir = path.resolve(`${__dirname}`, '../__appset');

    const appDir = path.resolve(`${__dirname}`, '../../../fe-theme');
    const defaultDirData = fs.readFileSync(`${defaultDir}/${component}`).toString().split('export')[0].split('=')[1];

    fs.readFile(`${appDir}/${component}`, 'utf8', (err, data) => {
      const componentFile = path.resolve(createDir, component);
      const replaceComponentName = component.replace('config', '').replace('.js', '');
      let componentContent;

      if (!err) {
        const userAppConfig = data.split('export')[0].split('=')[1];
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
        if (count === components.length) {
          console.log(color[0].value, ` ${count + 1}. Generated: Package index files for package for direct import \n`);
          console.log('\x1b[44m%s\x1b[0m', ` ${count + 2}. Final: Setup Completed Successfully`);
          console.log('');
        }
      });
    });

    return null;
  });
}).catch((err) => {
  console.log('err', err);
});

const srcPathInner = path.resolve(__dirname, '../__appset/universal');
const componentsInner = fs.readdirSync(srcPathInner).filter((files) => !ignoreFiles.includes(files) && !files.includes('WIP-'));

// Prod:
const createInnerDir = path.resolve(`${__dirname}`, '../../../fe-theme/universal');

// Local
// const createInnerDir = path.resolve(`${__dirname}`, '../../jio-fiber-chat-bot/fe-theme/universal');

mkdirp(createInnerDir).then(() => {
  componentsInner.map((component) => {
    // Prod: const defaultDir = path.resolve(`${__dirname}`, '../../../node_modules/fe-theme/__appset');

    const appDir = path.resolve(`${__dirname}`, '../../fe-theme/__appset/universal');

    fs.readFile(`${appDir}/${component}`, 'utf8', (err, data) => {
      console.log(err, data);
      const componentFile = path.resolve(createInnerDir, component);
      const componentContent = data;
      fs.writeFile(componentFile, componentContent, () => {

      });
    });

    return null;
  });
}).catch((err) => {
  console.log('err', err);
});
