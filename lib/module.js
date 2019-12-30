const path = require('path')
const consola = require('consola')

const logger = consola.withScope('nuxt:moment')

function momentModule(_moduleOptions) {
    const moduleOptions = Object.assign({}, this.options.moment, _moduleOptions)
    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        moduleOptions
    })

    logger.debug(`baseURL: ${moduleOptions}`)
}

module.exports = momentModule
module.exports.meta = require('../package.json')