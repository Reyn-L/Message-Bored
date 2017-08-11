/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const db = require('../../../models');
const Users = db.Users;
const Topics = db.Topics;
const Messages = db.Messages;

router.get('/', (req, res) => {
  Topics.findAll(req.body.name, { include: { model: Users } })
    .then(topics => {
      res.json(topics);
    })
    .catch(err => {});
});

router.get('/:id', (req, res) => {
  res.send('GET topics with id:' + req.params.id);
});

router.post('/', (req, res) => {
  console.log('req.body.name', req.body.name);
  Topics.create({ name: req.body.name, created_by: req.body.created_by }).then(topic => {
    console.log('topic', topic);
    res.json(topic);
  });
});
module.exports = router;
