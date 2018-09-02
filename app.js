'use strict';

const express = require('express');
const expressVersion = require('express/package').version;

const app = express();
app.set('view engine', 'pug');

app.get('*', (req, res) => {
  res.render('index', { expressVersion })
});

app.listen(process.env.PORT || 8080);
