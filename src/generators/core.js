var files = require('../templates/files')

module.exports = (answers) => {
  return [
    {
      name: 'package.json',
      output: process.cwd(),
      source: files.packageJSON
    }, {
      name: 'README.md',
      output: process.cwd(),
      source: files.readmeMD
    }, {
      name: 'index.js',
      output: process.cwd(),
      source: files.indexJS
    }, {
      name: 'Dockerfile',
      output: process.cwd(),
      source: files.dockerfile
    }, {
      name: 'compose.yaml',
      output: process.cwd(),
      source: files.composeYAML
    }, {
      name: '.gitignore',
      output: process.cwd(),
      source: files.gitignore
    }, {
      name: '.dockerignore',
      output: process.cwd(),
      source: files.dockerignore
    }, {
      name: 'index.js',
      output: `${process.cwd()}/config`,
      source: files.config.indexJS
    }, {
      name: '.gitkeep',
      output: `${process.cwd()}/logs`,
      source: files.logs.gitKeep
    },
    (!answers.mongo_integration) ? null : {
      name: 'mongo.db.js',
      output: `${process.cwd()}/config`,
      source: files.config.mongoDBJS
    },
    (!answers.redis_integration) ? null : {
      name: 'redis.db.js',
      output: `${process.cwd()}/config`,
      source: files.config.redisDBJS
    }, {
      name: 'index.js',
      output: `${process.cwd()}/app`,
      source: files.app.indexJS
    }, {
      name: 'dictionary.js',
      output: `${process.cwd()}/app`,
      source: files.app.dictionaryJS
    }, {
      name: 'logger.js',
      output: `${process.cwd()}/app/utils`,
      source: files.app.utils.loggerJS
    },
    (!answers.redis_integration) ? null : {
      name: 'session.js',
      output: `${process.cwd()}/app/utils`,
      source: files.app.utils.sessionJS
    },
    {
      name: 'default.error.js',
      output: `${process.cwd()}/app/middlewares`,
      source: files.app.middlewares.defaultErrorJS
    },
    {
      name: 'default.response.js',
      output: `${process.cwd()}/app/middlewares`,
      source: files.app.middlewares.defaultResponseJS
    },
    {
      name: 'handle.error.js',
      output: `${process.cwd()}/app/middlewares`,
      source: files.app.middlewares.handleErrorJS
    },
    {
      name: 'handle.jwt.js',
      output: `${process.cwd()}/app/middlewares`,
      source: files.app.middlewares.handleJwtJS
    },
    {
      name: 'handle.poweredby.js',
      output: `${process.cwd()}/app/middlewares`,
      source: files.app.middlewares.handlePoweredByJS
    },
  ]
}