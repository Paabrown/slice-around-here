const env = require('dotenv').config()
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./router.js');

const app = express();

const port = process.env.PORT

app.use(parser.json());

var path1 = path.join(__dirname, './../../node_modules')
var path2 = path.join(__dirname, './../client/public')

console.log('path1', path1)
console.log('path2', path2)

app.use('/scripts', express.static(path1));
app.use('/static', express.static(path2));
app.use('/api', router);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/public/index.html'))
})

app.listen(port);

console.log('Slice-around-here running on', port);