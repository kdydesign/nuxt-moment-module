function axiosModule (_moduleOptions) {
// Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'axios.js',
    options
  })
}

module.exports = axiosModule
module.exports.meta = require('../package.json')