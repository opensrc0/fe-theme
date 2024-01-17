/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable no-console */
const fs = require("fs")
const path = require("path")
const { mkdirp } = require("mkdirp")

const ignoreFiles = [
  ".DS_Store",
  "scripts",
  "utils",
  "themePrepare.js",
  "universal"
]

const mergeObj = (obj1, obj2) => ({ ...obj1, ...obj2 })

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const color = [
  { "name": "FgRed", "value": "\x1b[31m%s\x1b[0m" },
  { "name": "FgGreen", "value": "\x1b[32m%s\x1b[0m" },
  { "name": "FgYellow", "value": "\x1b[33m%s\x1b[0m" },
  { "name": "FgMagenta", "value": "\x1b[35m%s\x1b[0m" },
  { "name": "FgCyan", "value": "\x1b[36m%s\x1b[0m" }
]

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const srcPath = path.resolve(__dirname, "../__appset")
const components = process.env.COMPONENT_NAME ? [`config${capitalizeFirstLetter(process.env.COMPONENT_NAME)}.js`] : fs.readdirSync(srcPath).filter((files) => !ignoreFiles.includes(files) && !files.includes("WIP-"))
let count = 0
let createDir

if (process.env.ENVI === "local") {
  createDir = `${process.env.CURRENT_APP_DIR}/${process.env.COMPONENT_CONFIG_PATH}/fe-theme`
} else {
  createDir = path.resolve(`${__dirname}`, `../../../${process.env.COMPONENT_CONFIG_PATH}/fe-theme`)
}

mkdirp(createDir).then(() => {
  components.map((component) => {
    let defaultDir
    let appDir
    let defaultDirData
    let componentFile
    const replaceComponentName = component.replace("config", "").replace(".js", "")

    if (process.env.ENVI === "local") {
      defaultDir = path.resolve(`${__dirname}`)
      defaultDirData = fs.readFileSync(`${defaultDir}/${component}`).toString().split("export")[0].split(/=(.*)/s)[1]
      appDir = `${process.env.CURRENT_APP_DIR}/${process.env.COMPONENT_CONFIG_PATH}/fe-theme`
      componentFile = `${appDir}/${component}`
    } else {
      defaultDir = path.resolve(`${__dirname}`, "../../../node_modules/fe-theme/__appset")
      defaultDirData = fs.readFileSync(`${defaultDir}/${component}`).toString().split("export")[0].split(/=(.*)/s)[1]
      appDir = path.resolve(`${__dirname}`, `../../../${process.env.COMPONENT_CONFIG_PATH}/fe-theme`)
      componentFile = path.resolve(createDir, component)
    }

    if (process.env.COMPONENT_NAME) {
      let themeFile
      if (process.env.ENVI === "local") {
        themeFile = `${appDir}/theme.js`
      } else {
        themeFile = path.resolve(createDir, "theme.js")
      }
      fs.readFile(`${appDir}/theme.js`, "utf8", (err, data) => {
        let componentContent
        if (!err) {
          componentContent = data.replace("const theme = {", `import ${replaceComponentName} from './config${capitalizeFirstLetter(process.env.COMPONENT_NAME)}';
const theme = {
  ${replaceComponentName},`)
          if (!data.includes(`import ${replaceComponentName} from`)) {
            fs.writeFile(themeFile, componentContent, () => { })
          }
        } else {
          componentContent = `/* eslint-disable */
import ${replaceComponentName} from './config${capitalizeFirstLetter(process.env.COMPONENT_NAME)}';
const theme = {
  ${replaceComponentName}
}

export default theme;\n`
          fs.writeFile(themeFile, componentContent, () => { })
        }
      })
    }

    fs.readFile(`${appDir}/${component}`, "utf8", (err, data) => {
      if (component === "theme.js" || component === "configPXL.js") {
        console.log(componentFile, defaultDir, component)
        fs.writeFile(componentFile, fs.readFileSync(`${defaultDir}/${component}`).toString(), () => {})
      } else {
        let componentContent

        if (!err) {
          const userAppConfig = data.split("export")[0].split(/=(.*)/s)[1]
          componentContent = `/* eslint-disable */
const ${replaceComponentName} = ${JSON.stringify(mergeObj(JSON.parse(defaultDirData), JSON.parse(userAppConfig)), null, "\t")}
\nexport default ${replaceComponentName};\n`
        } else {
          componentContent = `/* eslint-disable */
const ${replaceComponentName} =${defaultDirData}export default ${replaceComponentName};\n`
        }

        fs.writeFile(componentFile, componentContent, (writeFileErr) => {
          if (writeFileErr) throw writeFileErr
          console.log(color[getRandomInt(color.length)].value, ` ${count + 1}. generated: ${componentFile} \n`)
          count += 1
          if (count === components.length) {
            console.log("\x1b[44m%s\x1b[0m", "Setup Completed Successfully")
            console.log("")
            count = 0
          }
        })
      }
    })

    return null
  })
}).catch((err) => {
  console.log("err mkdirp", err)
})

// mkdirp(createInnerDir).then(() => {
//   if (process.env.COMPONENT_NAME) {
//     let appDir;
//     let componentFile;
//     const replaceComponentName = capitalizeFirstLetter(process.env.COMPONENT_NAME.replace('config', '').replace('.js', ''));

//     if (process.env.ENVI === 'local') {
//       appDir = `${process.env.CURRENT_APP_DIR}/${process.env.COMPONENT_CONFIG_PATH}/fe-theme`;
//       componentFile = `${appDir}/theme.js`;
//     } else {
//       appDir = path.resolve(`${__dirname}`, `../../../${process.env.COMPONENT_CONFIG_PATH}/fe-theme`);
//       componentFile = path.resolve(createInnerDir, 'theme.js');
//     }
//     fs.readFile(`${appDir}/theme.js`, 'utf8', (err, data) => {
//       let componentContent;
//       if (!err) {
//         console.log('not error', data);
//         componentContent = data.replace('const theme = {', `import ${replaceComponentName} from '../config${capitalizeFirstLetter(process.env.COMPONENT_NAME)}';
// const theme = {
//   ${replaceComponentName},`);
//         if (!data.includes(`import ${replaceComponentName} from`)) {
//           fs.writeFile(componentFile, componentContent, () => { });
//         }
//       } else {
//         componentContent = `/* eslint-disable */
// import ${replaceComponentName} from '../config${capitalizeFirstLetter(process.env.COMPONENT_NAME)}';
// const theme = {
//   ${replaceComponentName}
// }

// export default theme;\n`;
//         fs.writeFile(componentFile, componentContent, () => { });
//       }
//     });
//   }
// }).catch((err) => {
//   console.log('err', err);
// });
