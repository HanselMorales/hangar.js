#!/usr/bin/env node

var handlebars = require('handlebars')
var inquirer = require('inquirer')
var program = require('commander')
var File = require('./src/file')
var fs = require('fs')

var CORE = require('./src/generators/core')
var { init } = require('./src/asks')

program
  .version('0.1.0')
  .option('-i, --init', 'Initialize Service Project')
  .parse(process.argv)

/**
 * INIT Command
 */
if (program.init) {
  inquirer.prompt(init).then(answers => {
    console.log(answers)

    let coreFiles = CORE(answers)

    coreFiles.map(props => {
      return File(answers, props)
    })

    console.log('Finished!')
  })
}
