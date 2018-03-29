const Handlebars = require('handlebars')
const fs = require('fs-extra')

const {
  includesHelper
} = require('./helpers')

module.exports = (data, props) => {
  try {
    // 1: Register Helpers
    Handlebars.registerHelper('includes', includesHelper)

    // 2: Create HandleBars Source Template
    let template = Handlebars.compile(props.source) 
    // 3: Create File in the FileSystem
    fs.outputFileSync(`${props.output}/${props.name}`, template(data))
  } catch (error) {
    throw Error(error)
  }
}