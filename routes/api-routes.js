var db = require('../models');
var express = require('express');
var router = express.Router();

var passport = require("../config/passport");

module.exports = function(app) {
    //get route for getting all the applications
    router.get('/api/apps', function(req, res) {
        var query = {};
        if (req.query.user_id) {
          query.UserId = req.query.user_id
        }
        // Here we add an include property to our options in our findAll query
        //we set the value to an array of the models we want to include
        db.Application.findAll({
          where: query,
        
        }).then(function(dbApp) {
          res.json(dbApp);
        });
      };


    };
