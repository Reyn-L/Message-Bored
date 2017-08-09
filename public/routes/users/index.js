/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const db = require('../../../models');
const Users = db.Users;
const Topics = db.Topics;
const Messages  = db.Messages;

router.get('/', (req, res) => {
  Users.findAll()
  .then((users) => {
    res.json(users);
  });
});

router.get('/:id', (req, res) => {
  Users.findById(req.params.id, {include: {model: Messages, include: {model: Topics}} })
  .then(userById => {
      console.log(userById);
      console.log(userById.Topics);
    let userObjs = {
      userId: userById.id,
      username: userById.name,
      message: userById.Messages,
      topics: userById.Topics
    };
    res.json(userObjs);
  });
});

router.post('/', (req, res) => {
  Users.create({name: req.body.name})
  .then(user => {
    res.json(user);
  });
});

module.exports = router;