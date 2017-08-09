/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const db = require('../../../models');
const Users = db.Users;

router.get('/', (req, res) => {
  Users.findAll()
  .then((users) => {
    res.json(users);
  });
});

router.get('/:id', (req, res) => {
  Users.findById(req.params.id)
  .then(userById => {
    console.log(userById);
    res.json(userById);
  });
});

router.post('/', (req, res) => {
  Users.create({name: req.body.name})
  .then(user => {
    res.json(user);
  });
});

module.exports = router;