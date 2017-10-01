const env = require('dotenv').config()
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./router.js');

const app = express();

const port = process.env.PORT

app.use(parser.json());

var modulesPath = path.join(__dirname, './../../node_modules')
var publicPath = path.join(__dirname, './../client/public')

app.use('/scripts', express.static(modulesPath));
app.use(express.static(publicPath));

app.use('/api', router);

app.listen(port);

console.log('Slice-around-here running on', port);