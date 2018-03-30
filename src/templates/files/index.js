const fs = require('fs')

module.exports = {
  'app': {
    'controllers': {
      'baseControllerJS': fs.readFileSync(`${__dirname}/app/controllers/BaseController.js.hbs`).toString()
    },
    'schemas': {
      '_commonJS': fs.readFileSync(`${__dirname}/app/schemas/_common.js.hbs`).toString(),
      'baseSchemaJS': fs.readFileSync(`${__dirname}/app/schemas/BaseSchema.js.hbs`).toString()
    },
    'middlewares': {
      'defaultErrorJS': fs.readFileSync(`${__dirname}/app/middlewares/default.error.js.hbs`).toString(),
      'defaultResponseJS': fs.readFileSync(`${__dirname}/app/middlewares/default.response.js.hbs`).toString(),
      'handleErrorJS': fs.readFileSync(`${__dirname}/app/middlewares/handle.error.js.hbs`).toString(),
      'handleJwtJS': fs.readFileSync(`${__dirname}/app/middlewares/handle.jwt.js.hbs`).toString(),
      'handlePoweredByJS': fs.readFileSync(`${__dirname}/app/middlewares/handle.poweredby.js.hbs`).toString(),
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
  'logs': {
    'gitKeep': ''
  },
  'gitignore': fs.readFileSync(`${__dirname}/gitignore.hbs`).toString(),
  'dockerignore': fs.readFileSync(`${__dirname}/dockerignore.hbs`).toString(),
  'composeYAML': fs.readFileSync(`${__dirname}/compose.yaml.hbs`).toString(),
  'dockerfile':  fs.readFileSync(`${__dirname}/dockerfile.hbs`).toString(),
  'indexJS': fs.readFileSync(`${__dirname}/index.js.hbs`).toString(),
  'packageJSON': fs.readFileSync(`${__dirname}/package.json.hbs`).toString(),
  'readmeMD': fs.readFileSync(`${__dirname}/readme.md.hbs`).toString()
}