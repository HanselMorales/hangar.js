const fs = require('fs')

module.exports = {
  'packageJSON': fs.readFileSync(`${__dirname}/package.json.hbs`).toString(),
  'readmeMD': fs.readFileSync(`${__dirname}/readme.md.hbs`).toString(),
  'indexJS': fs.readFileSync(`${__dirname}/index.js.hbs`).toString(),
  'dockerfile':  fs.readFileSync(`${__dirname}/dockerfile.hbs`).toString(),
  'configYAML': fs.readFileSync(`${__dirname}/config.yaml.hbs`).toString(),
  'gitignore': fs.readFileSync(`${__dirname}/gitignore.hbs`).toString(),
  'dockerignore': fs.readFileSync(`${__dirname}/dockerignore.hbs`).toString(),
}