const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '../app/views'));

require('../app/routes/create')(app); // CREATE
require('../app/routes/read')(app); // READ
require('../app/routes/update')(app); // UPDATE
require('../app/routes/delete')(app); // DELETE



module.exports = app;