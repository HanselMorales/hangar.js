#!/usr/bin/env node

var handlebars = require('handlebars')
var inquirer = require('inquirer')
var program = require('commander')
var File = require('./src/file')
var fs = require('fs')

var CORE = require('./src/generators/core')
var { init, entity } = require('./src/asks')
let { app } = require('./src/templates/files')

program
  .version('0.1.0')
  .option('-c, --controller', 'Crear Controlador')
  .option('-e, --entity', 'Crear Entidad')
  .option('-s, --schema', 'Crear Schema')
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
 * Comando Entidad
 */
if (program.entity) {
  inquirer.prompt(entity).then(answers => {
    File(answers, {
      name: `${answers.entity_name}Controller.js`,
      output: `${process.cwd()}/app/controllers`,
      source: app.controllers.baseControllerJS
    })

    File(answers, {
      name: `${answers.entity_name}Schema.js`,
      output: `${process.cwd()}/app/schemas`,
      source: app.schemas.baseSchemaJS
    })

    console.log(`
      Entidad Creada!
    `)
  })
}

/**
 * Comando Controlador
 */
if (program.controller) {
  inquirer.prompt(entity).then(answers => {
    File(answers, {
      name: `${answers.entity_name}Controller.js`,
      output: `${process.cwd()}/app/controllers`,
      source: app.controllers.baseControllerJS
    })

    console.log(`
      Entidad Creada!
    `)
  })
}

/**
 * Comando Schema
 */
if (program.schema) {
  inquirer.prompt(entity).then(answers => {
    File(answers, {
      name: `${answers.entity_name}Schema.js`,
      output: `${process.cwd()}/app/schemas`,
      source: app.schemas.baseSchemaJS
    })
  })
}