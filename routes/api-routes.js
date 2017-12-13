var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.Application ]
  }).then(function(users) {
    res.render('index', {
      title: 'Applications',
      users: users
    });
  });
});

module.exports = router;
