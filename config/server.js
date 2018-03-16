const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator());

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controller')
    .into(app)

module.exports = app;