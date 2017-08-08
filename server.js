/*jshint esversion: 6*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// app.get('api/users/index.js', (req, res) => {
//   res.send('Hello World!');
// });

// app.post('api/users/index.js', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('api/topics/index.js', (req, res) => {
//   res.send('Hello World!');
// });

// app.post('api/topics/index.js', (req, res) => {
//   res.send('Hello World!');
// });

// app.put('api/topics/index.js', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('api/messages/index.js', (req, res) => {
//   res.send('Hello World!');
// });

// app.post('api/messages/index.js', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});