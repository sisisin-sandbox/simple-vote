const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('vote', { title: 'Vote' });
});

module.exports = router;
