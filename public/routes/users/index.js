/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET all users');
});

router.get('/:id', (req, res) => {
  res.send('GET user with id:' + req.params.id);
});

module.exports = router;