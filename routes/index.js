var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
    { venue: 'Sullivan\'s Steakhouse',
      bandleader: 'Daniel Tabion'
  });
});

module.exports = router;
