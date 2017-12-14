var db = require('../models');
var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");

module.exports = function(app) {

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
};
