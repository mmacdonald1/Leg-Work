var db = require('../models');
var express = require('express');
//var bodyParser = require('body-parser');
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated.js");
module.exports = function(app) {
    //get route for getting all the applications
    app.get('/members', function(req, res) {

    //  console.log("HELL_FUCKIN_O");
      var query = {};
  if (req.query.UserId) {
    query.UserId = req.query.UserId;
  }
        // Here we add an include property to our options in our findAll query
        //we set the value to an array of the models we want to include
        db.Application.findAll({
          where: query

        }).then(function(result) {

          db.User.findAll({where: query})
          .then(function(dbApp){
            if(req.user){
              res.render('members',{
                Application: result,
                user: dbApp
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
      //console.log(req.body);
      db.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }).then(function() {
        res.redirect(307, "/api/login");
      }).catch(function(err) {
        //console.log(err);
        res.json(err);
      });
    });

    //if logout function redirect to home
    app.get("/logout", function(req, res) {
      req.logout();
      res.redirect("/");
    });

//takes the data from the application form and submits it to the database
    app.post('/fetchApps', function (req, res){
      db.Application.create({
        UserId: req.user.id,
        date: req.body.date,
        companyName: req.body.company_name,
        jobTitle: req.body.job_posting,
        stage: req.body.stage,
        nextAction: req.body.state,
        website: req.body.website,
        notes: req.body.comment

      }).then(function(){
        res.redirect("/members");
      });
    });

    //getting the data to send to the pie chart
    app.get("/api/piechart", isAuthenticated, function(req, res) {
      //console.log('yo');
    //  console.log(query)
      db.Application.findAll({
        where:{UserId: req.user.id}})
        .then(function(result) {
      //  console.log(result,' this is our result')
            //res.json(result);
            res.json(result);

          })
        })

    };
