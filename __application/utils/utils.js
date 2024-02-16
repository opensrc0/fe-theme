/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import fs from "fs"
import path from "path"
import { ignoreFiles } from "./constants.js"

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export const getRandomInt = (max) => Math.floor(Math.random() * max)

export const getDirPath = (env, CURRENT_APP_DIR, COMPONENT_CONFIG_PATH) => {
  let createDir

  if (env === "local") {
    createDir = `${CURRENT_APP_DIR}/${COMPONENT_CONFIG_PATH}/fe-theme`
  } else {
    createDir = path.resolve(`${__dirname}`, `../../../${process.env.COMPONENT_CONFIG_PATH}/fe-theme`)
  }

  return createDir
}

export const getComponents = (COMPONENT_NAME) => {
  const srcPath = path.resolve("__appset")

  return COMPONENT_NAME ?
    COMPONENT_NAME.split(",").map((v) => `config${capitalizeFirstLetter(v)}.js`).concat(["theme.js"]) :
    fs.readdirSync(srcPath).filter((files) => !ignoreFiles.includes(files))
}
