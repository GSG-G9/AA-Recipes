require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./router');
const errorHandele = require('./controller/error');

const app = express();

app.set('port', process.env.PORT || 5000);

app.disable('x-powered-by');
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(router);
app.use(errorHandele.error404);
app.use(errorHandele.error500);

module.exports = app;
