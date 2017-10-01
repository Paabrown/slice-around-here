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
var path3 = path.join(__dirname, './../client/public/index.html')

app.use('/scripts', express.static(path1));
app.use(express.static(path2));
app.use('/api', router);

app.listen(port);

console.log('Slice-around-here running on', port);