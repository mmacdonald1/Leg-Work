var db = require('../models');
var express = require('express');

var passport = require("../config/passport");

module.exports = function(app) {
    //get route for getting all the applications
    app.get('/api/apps', function(req, res) {
        var query = {};
        if (req.query.user_id) {
          query.UserId = req.query.user_id
        }
        // Here we add an include property to our options in our findAll query
        //we set the value to an array of the models we want to include
        db.Application.findAll({
          where: query,

        }).then(function(result) {
          db.User.findAll({where: query})
          .then(function(dbApp){
            if(req.user){
              res.render('members',{
                application: result,
                user: data
              })
            }
          })
        });
      });

      //if member redirect to members page
      app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json("/members");
      });

      //if signup is filled out create user
    app.post("/api/signup", function(req, res) {
      console.log(req.body);
      db.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }).then(function() {
        res.redirect(307, "/api/login");
      }).catch(function(err) {
        console.log(err);
        res.json(err);
      });
    });

    //if logout function redirect to home
    app.get("/logout", function(req, res) {
      req.logout();
      res.redirect("/");
    });

    };
