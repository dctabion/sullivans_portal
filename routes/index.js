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
  var pageData = {
    bandleader: "Daniel Tabion",
    pay: 0,
    tips: false,
    day: "",
    date: "",
    startTime: "",
    endTime: "",
    venueCompleteName: "", // i.e. - "Sullivan's Steakhouse - NAPERVILLE location"
    venueAddress: "", // i.e. - 244 S Main St, Naperville, IL 60540
    mapURL: "",
    dress: "Look sharp. Jacket, pants, dress shoes. Dark colors. Tie is a nice option.",
    instrumentation: "Piano/Drums duo (strange, I know)",
    music: "Anything you want to play. For example: jazz, pop, blues, R&B, soul, funk, etc.",
    food: "$7 bar menu specials on Thursdays."
  }

  if (req.query.venue) {
    console.log('req.query.venue: ', req.query.venue);
    if (req.query.venue == "SSHLS") {
      pageData.pay = 100;
      pageData.tips = true;
      pageData.day = req.query.day;
      pageData.date = req.query.date;
      pageData.startTime = "5:30pm";
      pageData.endTime = "9:30pm";
      pageData.venueCompleteName = "Sullivan's Steak House - NAPERVILLE location.";
      pageData.venueAddress = "244 S Main St, Naperville, IL 60540";
      pageData.mapURL = "https://goo.gl/maps/Vnrnhkhuqby";
    }
  }
  else {
    console.log('no query!');
  }

  res.render('terms_policies', pageData);
});



module.exports = router;
