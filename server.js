/*jshint esversion: 6*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./public/routes');

let PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});