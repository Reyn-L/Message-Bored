/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const db = require('../../../models');
const Users = db.Users;
const Topics = db.Topics;
const Messages = db.Messages;

router.get('/latest', (req, res) => {
  res.send('GET all messages');
});

router.get('/bytopic/:topic_id', (req, res) => {
  res.send('GET messages with id:' + req.params.id);
});

router.post('/', (req, res) => {
  res.send(200);
});

module.exports = router;
