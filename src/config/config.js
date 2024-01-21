const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '../app/views'));

require('../app/routes/read')(app);
require('../app/routes/create')(app);
require('../app/routes/delete')(app);



module.exports = app;