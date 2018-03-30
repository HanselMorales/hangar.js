module.exports = [
  {
    type: 'input',
    name: 'project_name',
    message: 'Nombre del Proyecto:'
  },
  {
    type: 'input',
    name: 'project_domain_name',
    message: 'Dominio de servicio:'
  },
  {
    type: 'input',
    name: 'npm_name',
    message: 'Nombre para NPM:'
  },
  {
    type: 'input',
    name: 'project_description',
    message: 'Descripción del proyecto:'
  }, 
  {
    type: 'input',
    name: 'project_owner',
    message: 'Autor:'
  }, 
  {
    type: 'input',
    name: 'project_license',
    message: 'Licencia (Apache-2.0):',
    default: 'Apache-2.0'
  }, 
  {
    type: 'input',
    name: 'project_version',
    default: '0.1.0-dev',
    message: 'Versión del proyecto (0.1.0-dev)'
  }, 
  {
    type: 'input',
    name: 'node_version',
    default: 'carbon',
    message: 'Versión de node (docker image) carbon'
  }, 
  {
    type: 'input',
    name: 'service_lang',
    message: 'Lenguaje del servicio (ES):',
    default: 'ES'
  },
  {
    type: 'input',
    name: 'service_port',
    message: 'Puerto del servicio (3000):',
    default: 3000
  },
  {
    type: 'confirm',
    name: 'mongo_integration',
    message: 'Integración con MongoDB',
    default: true
  },
  {
    type: 'input',
    name: 'mongo_port',
    default: 27017,
    message: 'Puerto de MongoDB:',
    when: function (a) {
      return a.mongo_integration
    }
  },
  {
    type: 'input',
    name: 'mongo_host',
    message: 'Host Mongo (mongo):',
    default: 'mongo',
    when: function (a) {
      return a.mongo_integration
    }
  },
  {
    type: 'input',
    name: 'mongo_db',
    message: 'Nombre DB Mongo:',
    default: 'tests',
    when: function (a) {
      return a.mongo_integration
    }
  },
  {
    type: 'confirm',
    name: 'redis_integration',
    message: 'Integración con RedisDB',
    default: false
  },
  {
    type: 'input',
    name: 'redis_host',
    message: 'Host Redis (redis):',
    default: 'redis',
    when: function (a) {
      return a.redis_integration
    }
  },
  {
    type: 'input',
    name: 'redis_port',
    default: 6379,
    message: 'Puerto de RedisDB:',
    when: function (a) {
      return a.redis_integration
    }
  }
]