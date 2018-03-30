const fs = require('fs')

module.exports = {
  'app': {
    'controllers': {

    },
    'middlewares': {

    },
    'schemas': {

    },
    'utils': {
      'loggerJS': fs.readFileSync(`${__dirname}/app/utils/logger.js.hbs`).toString(),
      'sessionJS': fs.readFileSync(`${__dirname}/app/utils/session.js.hbs`).toString(), 
    },
    'dictionaryJS': fs.readFileSync(`${__dirname}/app/dictionary.js.hbs`).toString(),
    'indexJS': fs.readFileSync(`${__dirname}/app/index.js.hbs`).toString(),
  },
  'config': {
    'indexJS': fs.readFileSync(`${__dirname}/config/index.js.hbs`).toString(),
    'mongoDBJS': fs.readFileSync(`${__dirname}/config/mongo.db.js.hbs`).toString(),
    'redisDBJS': fs.readFileSync(`${__dirname}/config/redis.db.js.hbs`).toString(),
  },
  'gitignore': fs.readFileSync(`${__dirname}/gitignore.hbs`).toString(),
  'dockerignore': fs.readFileSync(`${__dirname}/dockerignore.hbs`).toString(),
  'configYAML': fs.readFileSync(`${__dirname}/config.yaml.hbs`).toString(),
  'dockerfile':  fs.readFileSync(`${__dirname}/dockerfile.hbs`).toString(),
  'indexJS': fs.readFileSync(`${__dirname}/index.js.hbs`).toString(),
  'packageJSON': fs.readFileSync(`${__dirname}/package.json.hbs`).toString(),
  'readmeMD': fs.readFileSync(`${__dirname}/readme.md.hbs`).toString()
}