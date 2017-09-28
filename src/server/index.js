const env = require('dotenv').config()
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./router.js');


const app = express();

const port = process.env.PORT

app.use(parser.json());
app.use('/scripts', express.static(path.resolve(__dirname, '../../node_modules')));
app.use('', express.static(path.resolve(__dirname, '../client/public')));
app.use('/api', router);

app.listen(port);

console.log('Slice-around-here running on', port);