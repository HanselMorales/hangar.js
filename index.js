#!/usr/bin/env node

var handlebars = require('handlebars')
var inquirer = require('inquirer')
var program = require('commander')
var File = require('./src/file')
var fs = require('fs')
var { execSync } = require('child_process')

var CORE = require('./src/generators/core')
var { init, entity } = require('./src/asks')
let { app } = require('./src/templates/files')

program
  .version('0.1.0')
  .option('-c, --controller', 'Crear Controlador')
  .option('-e, --entity', 'Crear Entidad')
  .option('-s, --schema', 'Crear Schema')
  .option('-i, --init', 'Inicializar Proyecto Nuevo')
  .option('-w, --wrapper', 'Crear Wrapper')
  .option('-r, --router', 'Crear Rutas')
  .option('-t, --test', 'Crear Test')
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
      Generación de archivos completa:
      ${coreFiles.length} Archivos Generados
    `)

    console.log(`
      Instalando dependencias via NPM ...
    `)
    execSync('npm i')
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
      name: `${answers.entity_plural_name}Controller.js`,
      output: `${process.cwd()}/app/controllers`,
      source: app.controllers.baseControllerJS
    })

    console.log(`
      Controlador Creado!
    `)
  })
}

/**
 * Comando Schema
 */
if (program.schema) {
  inquirer.prompt(entity).then(answers => {
    File(answers, {
      name: `${answers.entity_plural_name}Schema.js`,
      output: `${process.cwd()}/app/schemas`,
      source: app.schemas.baseSchemaJS
    })

    console.log(`
      Schema Creado!
    `)
  })
}

/**
 * Comando Wrapper
 */
if (program.wrapper) {
  inquirer.prompt(entity).then(answers => {
    File(answers, {
      name: `${answers.entity_plural_name}.js`,
      output: `${process.cwd()}/app/wrappers`,
      source: app.wrappers.baseWrapperJS
    })

    console.log(`
      Wrapper Creado!
    `)
  })
}

/**
 * Comando Routes
 */
if (program.router) {
  inquirer.prompt(entity).then(answers => {
    File(answers, {
      name: `${answers.entity_plura_name}.js`,
      output: `${process.cwd()}/app/routes`,
      source: app.routes.baseRoutesJS
    })

    console.log(`
      Ruta Creada!
    `)
  })
}


/**
 * Comando Test
 */
if (program.test) {
  inquirer.prompt(entity).then(answers => {
    File(answers, {
      name: `${answers.entity_plural_name}.test.js`,
      output: `${process.cwd()}/app/test`,
      source: app.test.baseTestJS
    })

    console.log(`
      Test Creado!
    `)
  })
}