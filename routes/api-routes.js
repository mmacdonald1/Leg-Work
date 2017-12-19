var db = require('../models');
var express = require('express');
//var bodyParser = require('body-parser');
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated.js");
module.exports = function(app) {
    //get route for getting all the applications
    app.get('/members', function(req, res) {
console.log("WE REACHED MEMBERS")
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
            if(req.user)

            {
              db.Company.findAll().then(function(data){
                console.log("DATA",data);
                res.render('members',{
                  Company: data,
                  Application: result,
                  user: dbApp
                })
              })
              // res.render('members',{
              //   Application: result,
              //   user: dbApp
              // })
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
      console.log(req.body);
      const companyId = [...req.body.company_name].filter(el=>parseInt(el)? el : '').join('');
      const companyName = [...req.body.company_name].filter(el => parseInt(el)? '' : el).join('');
      console.log(companyId + "   " + companyName);
    //   { UserId: '1',
    // date: '10/15/1994',
    // company_name: '1askjf',
    // job_posting: 'asdf',
    // stage: 'TBD',
    // state: 'asdf',
    // website: 'asdf',
    // comment: 'asdf' }

      db.Application.create({
        CompanyId: companyId,
        UserId: req.body.UserId,
        date: req.body.date,
        companyName: companyName,
        jobTitle: req.body.job_posting,
        stage: req.body.stage,
        nextAction: req.body.state,
        website: req.body.website,
        notes: req.body.comment

      }).then(function(){
        res.redirect("/members");
      });
    });

    app.post('/fetchComps', function (req, res){
      console.log(req.body);
    //   const companyId = [...req.body.company_name].filter(el=>parseInt(el)? el : '').join('');
    //   const companyName = [...req.body.company_name].filter(el => parseInt(el)? '' : el).join('');
    //   console.log(companyId + "   " + companyName);
    // //   { UserId: '1',
    // date: '10/15/1994',
    // company_name: '1askjf',
    // job_posting: 'asdf',
    // stage: 'TBD',
    // state: 'asdf',
    // website: 'asdf',
    // comment: 'asdf' }

      db.Company.create({

        UserId: req.user.id,
        companyName: req.body.compName,
        website: req.body.compWeb,
        culture: req.body.compCulture,
        benefits: req.body.compBenefits,
        notes: req.body.compNotes,
      }).then(function(){
        res.redirect("/company");
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
