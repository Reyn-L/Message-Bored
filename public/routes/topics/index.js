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

router.put('/:name', (req, res) => {
  Topics.findOne({ where: { name: req.params.name } }).then(topicName => {
    console.log(req.body);
    Topics.update({ name: req.body.name }, { where: { id: topicName.id } })
      .then(topicName => {
        res.json(topicName);
      })
      .catch(err => {
        console.log(err);
      });
  });
});

router.post('/', (req, res) => {
  Topics.create({
    name: req.body.name,
    created_by: req.body.created_by
  }).then(topic => {
    res.json(topic);
  });
});
module.exports = router;
