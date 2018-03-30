#!/usr/bin/env node

var handlebars = require('handlebars')
var inquirer = require('inquirer')
var program = require('commander')
var File = require('./src/file')
var fs = require('fs')

var CORE = require('./src/generators/core')
var { init, controller } = require('./src/asks')

program
  .version('0.1.0')
  .option('-c, --controller', 'Crear Controlador')
  .option('-i, --init', 'Inicializar Proyecto Nuevo')
  .parse(process.argv)

/**
 * Comando Inicializar
 */
if (program.init) {
  inquirer.prompt(init).then(answers => {
    let coreFiles = CORE(answers)

    coreFiles.map(props => {
      if (props != null) {
        return File(answers, props)
      }
    })

    console.log(`
      Generation Complete:
      ${coreFiles.length} Files Generated
    `)
  })
}

/**
 * Comando Controlador
 */

if (program.controller) {
  let { app } = require('./src/templates/files')

  inquirer.prompt(controller).then(answers => {
    File(answers, {
      name: `${answers.controller_name}Controller.js`,
      output: `${process.cwd()}/app/controllers`,
      source: app.controllers.baseControllerJS
    })
  })
}