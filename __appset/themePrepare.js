/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable no-console */
import fs from "fs"
import path from "path"

import { mkdirp } from "mkdirp"
import merge from "lodash.merge"
import { getDirPath, getComponents, getRandomInt } from "./../__application/utils/utils.js"
import { color } from "../__application/utils/constants.js"

const ENVIRONMENT = process.env.ENVI
const CURRENT_APP_DIR = process.env.CURRENT_APP_DIR // My project Location
const COMPONENT_CONFIG_PATH = process.env.COMPONENT_CONFIG_PATH // Where to place in My project Location
const COMPONENT_NAME = process.env.COMPONENT_NAME

const dirPath = getDirPath(ENVIRONMENT, CURRENT_APP_DIR, COMPONENT_CONFIG_PATH)
const components = getComponents(COMPONENT_NAME)

let count = 0
let appDir
let componentFile
let relativeAppDir
./../../llm-fe/fe-theme/configChip.js
if (ENVIRONMENT === "local") {
  appDir = `${CURRENT_APP_DIR}/${COMPONENT_CONFIG_PATH}fe-theme`
  relativeAppDir = "../../fe-theme/__appset"
} else {
  appDir = path.resolve(`${__dirname}`, `../../../${process.env.COMPONENT_CONFIG_PATH}fe-theme`)
}
console.log("relativeAppDir", relativeAppDir)
const copyFiles = ["theme.js", "configPXL.js", "normalise.js"]

const copyConfigFile = () => {

}

const getMergedJson = async (component) => {
  const feThemeDefaultConfig = (await import(`./${component}`)).default
  let userProjectConfig
  try {
    console.log(`${appDir}/${component}`)
    userProjectConfig = (await import(`${relativeAppDir}/${component}`)).default
    console.log("try", userProjectConfig)
  } catch {
    userProjectConfig = {}
    console.log("catch", userProjectConfig)
  }
  // console.log(feThemeDefaultConfig, userProjectConfig)
  const mergeTheme = merge(feThemeDefaultConfig, userProjectConfig)

  return mergeTheme
}

mkdirp(dirPath).then(() => {
  components.map(async (component) => {
    if (copyFiles.includes(component)) {
      copyConfigFile()
    } else {
      const mergedJson = await getMergedJson(component)
      const file = fs.readFileSync(`${path.resolve("__appset")}/configChip.js`).toString()
      const fileVarName = component.replace("config", "").replace(".js", "")
      const regex = new RegExp(`const ${fileVarName} =|export default`, "gi")
      const splitFileData = file.split(regex)

      const newMergedFileData = `${splitFileData[0]}const ${fileVarName} = ${JSON.stringify(mergedJson, null, 2)} \n\nexport default${splitFileData[2]}`

      if (ENVIRONMENT === "local") {
        componentFile = `${appDir}/${component}`
      } else {
        componentFile = path.resolve(dirPath, component)
      }

      fs.writeFile(componentFile, newMergedFileData, (writeFileErr) => {
        if (writeFileErr) throw writeFileErr
        console.log(color[getRandomInt(color.length)].value, ` ${count + 1}. generated: ${componentFile} \n`)
        count += 1
        if (count === components.length) {
          console.log("\x1b[44m%s\x1b[0m", "Setup Completed Successfully")
          console.log("")
          count = 0
        }
      })
      // fs.readFile(`${CURRENT_APP_DIR}/__appset/${component}`, "utf8", (err, data) => {
      //   console.log(err, data)
      // })
    }

    // console.log(component)

    // fs.readFile(`${appDir}/${component}`, "utf8", (err, data) => {
    //   console.log(err, data)
    //       if (component === "theme.js" || component === "configPXL.js" || component === "normalise.js") {
    //         console.log(componentFile, defaultDir, component)
    //         fs.writeFile(componentFile, fs.readFileSync(`${defaultDir}/${component}`).toString(), () => {})
    //       } else {
    //         let componentContent

    //         if (!err) {
    //           const userAppConfig = data.split("export")[0].split(/=(.*)/s)[1]
    //           componentContent = `/* eslint-disable */
    // const ${replaceComponentName} = ${JSON.stringify(mergeObj(JSON.parse(defaultDirData), JSON.parse(userAppConfig)), null, "\t")}
    // \nexport${exportSplit[1]}\n`
    //         } else {
    //           componentContent = `/* eslint-disable */
    // const ${replaceComponentName} =${defaultDirData}export${exportSplit[1]}\n`
    //         }

    //         fs.writeFile(componentFile, componentContent, (writeFileErr) => {
    //           if (writeFileErr) throw writeFileErr
    //           console.log(color[getRandomInt(color.length)].value, ` ${count + 1}. generated: ${componentFile} \n`)
    //           count += 1
    //           if (count === components.length) {
    //             console.log("\x1b[44m%s\x1b[0m", "Setup Completed Successfully")
    //             console.log("")
    //             count = 0
    //           }
    //         })
    //       }
    // })

    return component
  })
})

// const component = (await import("./configChip.js")).default

// console.log(component)

// const mergeObj = (obj1, obj2) => ({ ...obj1, ...obj2 })

// mkdirp(createDir).then(() => {
//   components.map((component) => {
//     let defaultDir
//     let appDir
//     let defaultDirData
//     let componentFile
//     let exportSplit
//     const replaceComponentName = component.replace("config", "").replace(".js", "")

//     if (process.env.ENVI === "local") {
//       defaultDir = path.resolve(`${__dirname}`)
//       exportSplit = fs.readFileSync(`${defaultDir}/${component}`).toString().split("export")
//       defaultDirData = exportSplit[0].split(/=(.*)/s)[1]
//       appDir = `${process.env.CURRENT_APP_DIR}/${process.env.COMPONENT_CONFIG_PATH}/fe-theme`
//       componentFile = `${appDir}/${component}`
//     } else {
//       defaultDir = path.resolve(`${__dirname}`, "../../../node_modules/fe-theme/__appset")
//       exportSplit = fs.readFileSync(`${defaultDir}/${component}`).toString().split("export")
//       defaultDirData = exportSplit[0].split(/=(.*)/s)[1]
//       appDir = path.resolve(`${__dirname}`, `../../../${process.env.COMPONENT_CONFIG_PATH}/fe-theme`)
//       componentFile = path.resolve(createDir, component)
//     }

//     if (process.env.COMPONENT_NAME) {
//       let themeFile
//       if (process.env.ENVI === "local") {
//         themeFile = `${appDir}/theme.js`
//       } else {
//         themeFile = path.resolve(createDir, "theme.js")
//       }
//       fs.readFile(`${appDir}/theme.js`, "utf8", (err, data) => {
//         let componentContent
//         if (!err) {
//           componentContent = data.replace("const theme = {", `import ${replaceComponentName} from './config${capitalizeFirstLetter(process.env.COMPONENT_NAME)}';
// const theme = {
//   ${replaceComponentName},`)
//           if (!data.includes(`import ${replaceComponentName} from`)) {
//             fs.writeFile(themeFile, componentContent, () => { })
//           }
//         } else {
//           componentContent = `/* eslint-disable */
// import ${replaceComponentName} from './config${capitalizeFirstLetter(process.env.COMPONENT_NAME)}';
// const theme = {
//   ${replaceComponentName}
// }

// export default theme;\n`
//           fs.writeFile(themeFile, componentContent, () => { })
//         }
//       })
//     }

//     fs.readFile(`${appDir}/${component}`, "utf8", (err, data) => {
//       if (component === "theme.js" || component === "configPXL.js" || component === "normalise.js") {
//         console.log(componentFile, defaultDir, component)
//         fs.writeFile(componentFile, fs.readFileSync(`${defaultDir}/${component}`).toString(), () => {})
//       } else {
//         let componentContent

//         if (!err) {
//           const userAppConfig = data.split("export")[0].split(/=(.*)/s)[1]
//           componentContent = `/* eslint-disable */
// const ${replaceComponentName} = ${JSON.stringify(mergeObj(JSON.parse(defaultDirData), JSON.parse(userAppConfig)), null, "\t")}
// \nexport${exportSplit[1]}\n`
//         } else {
//           componentContent = `/* eslint-disable */
// const ${replaceComponentName} =${defaultDirData}export${exportSplit[1]}\n`
//         }

//         fs.writeFile(componentFile, componentContent, (writeFileErr) => {
//           if (writeFileErr) throw writeFileErr
//           console.log(color[getRandomInt(color.length)].value, ` ${count + 1}. generated: ${componentFile} \n`)
//           count += 1
//           if (count === components.length) {
//             console.log("\x1b[44m%s\x1b[0m", "Setup Completed Successfully")
//             console.log("")
//             count = 0
//           }
//         })
//       }
//     })

//     return null
//   })
// }).catch((err) => {
//   console.log("err mkdirp", err)
// })

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
