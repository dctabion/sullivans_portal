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

/* GET gig details page. */
router.get('/terms_policies', function(req, res, next) {
  res.render('terms_policies',
    { venue: 'Sullivan\'s Steakhouse',
      bandleader: 'Daniel Tabion',
      pay: '$100'
  });
});

/* GET policies page. */
router.get('/terms_policies', function(req, res, next) {
  res.render('terms_policies',
    { venue: 'Sullivan\'s Steakhouse',
      bandleader: 'Daniel Tabion',
      pay: '$125'
  });
});


module.exports = router;
