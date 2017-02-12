var express = require('express');
var router = express.Router();
const db = require('../../models');

router.get('/', (req, res) => {
  db.Vote.findAll().then(votes => {
    res.json(votes.map(v => v.toJSON()));
  }).catch(e => {
    console.log(e);
    res.status(500);
    res.end();
  });
});

router.post('/', function (req, res, next) {
  db.Vote.create().then(vote => {
    res.json(vote.toJSON());
  }).catch(e => {
    console.log(e);
    res.status(500);
    res.end();
  })
});

module.exports = router;
