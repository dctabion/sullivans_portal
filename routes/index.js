var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
    { venue: 'Sullivan\'s Steakhouse',
      bandleader: 'Daniel Tabion'
  });
});

/* GET schedule page. */
router.get('/schedule', function(req, res, next) {
  res.render('schedule',
    { venue: 'Sullivan\'s Steakhouse',
      bandleader: 'Daniel Tabion'
  });
});

/* GET policies page. */
router.get('/policies', function(req, res, next) {
  res.render('policies',
    { venue: 'Sullivan\'s Steakhouse',
      bandleader: 'Daniel Tabion'
  });
});

module.exports = router;
