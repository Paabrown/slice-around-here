var path = require('path')

console.log('dirname!!!', __dirname);

var maps = path.join(__dirname, './dist/index.js')

console.log('maps', maps);

var Everything = require('./dist/index.js');

console.log('everything', Everything)

module.exports = Everything;