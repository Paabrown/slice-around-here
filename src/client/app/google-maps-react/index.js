var path = require('path')

console.log('dirname', __dirname);

module.exports = require(path.join(__dirname, './dist/index.js'));