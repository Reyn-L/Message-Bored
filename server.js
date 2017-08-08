/*jshint esversion: 6*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});