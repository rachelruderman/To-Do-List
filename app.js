//app.js is our Express app
//goal: watch Stephen's vids to figure out what this all means line-by-line
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//set up the express app
const app = express();

//Log requests to the console
app.use(logger('dev'));

//Parse data from incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Require our routes into the application
require('./server/routes')(app);
//Set up a default catch-all route that sends back a welcome message in json
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness',
}));

module.exports = app;
