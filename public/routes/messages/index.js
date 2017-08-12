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

router.get('/by-topic/:topic_id', (req, res) => {
  res.send('GET messages with id:' + req.params.id);
});

router.post('/', (req, res) => {
  Messages.create({
    body: req.body.body,
    author_id: req.body.author_id,
    topic_id: req.body.topic_id
  }).then(message => {
    res.json(message);
  });
});

module.exports = router;
