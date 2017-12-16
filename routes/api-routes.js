var db = require('../models');
var express = require('express');

var passport = require("../config/passport");

module.exports = function(app) {
    //get route for getting all the applications
app.get('/members', function(req, res) {

      console.log("HELL_FUCKIN_O");
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

    
    //
    app.post("/api/compinput", function(req,res){
        console.log(req.body);
        db.Company.create({
            companyName: req.body.companyName,
            website: req.body.website,
            culture: req.body.culture,
            benefits: req.body.benefits,
            notes:req.body.notes
        }).then(function(){
            res.redirect("/members")
        });
    });
    };

    
