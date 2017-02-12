var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
  db.Vote.findAll().then(votes => {
    res.render('index', { title: 'Express', votes: votes.map(v => v.toJSON()) });
  }).catch(e => {
    console.log(e);
    res.status(500);
    res.end();
  });
});

module.exports = router;
