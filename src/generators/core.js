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
      name: 'config.yaml',
      output: process.cwd(),
      source: files.configYAML
    }, {
      name: '.gitignore',
      output: process.cwd(),
      source: files.gitignore
    }, {
      name: '.dockerignore',
      output: process.cwd(),
      source: files.dockerignore
    }
  ]
}