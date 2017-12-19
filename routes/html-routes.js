var path = require("path");
var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated.js");
var bodyParser = require('body-parser');

///* Register Partials */
//hbs = require('hbs'),
//
//hbs.registerPartials(__dirname + '/views');

module.exports = function(app) {
  //if user is signed in send to user dash if not redirect to signup
  app.get("/", function(req, res) {
    if (req.user) {
        res.redirect("/members");
      }
      res.render('signup');
//      res.render('index',{title:'Sign Up'
//            whichPartial:function(){
//                return "signup";
//            }
//        });
    });

    //if user is a signed in send to user dash else send to login
    app.get("/login", function(req, res) {
      if (req.user) {
        res.render("members", { hello: "world"});
      }
        res.render('login');
//      res.render('index', {title:'Log In'
//            whichPartial:function(){
//                return "login";
//            }
//        });
    });

    //if user is atuhenticated send to user dash
    app.get("/members", isAuthenticated, function(req, res) {
    //  console.log('yo');
    //  console.log(query)
      db.Application.findAll({
        where:{UserId: req.user.id}})
        .then(function(result) {
          db.Company.findAll().then(function(data){
            res.render('members',{
              Application: result,
              Company: data,
              User: req.user.id
            })

          })
      //  console.log(result,' this is our result')

          })
        })

      //res.sendFile(path.join(__dirname, "../public/members.html"));
      //res.render("members", { hello: "world"});
app.get("/piechart", isAuthenticated, function(req, res){

  if (req.user) {
      res.render("piechart");
}
});

app.get("/company", function(req,res){
    var query ={};
    if (req.query.companyName){
        query.companyName =req.query.companyName;
    }
    console.log("EEEEEE")
    db.Company.findAll({
        where:query
    }).then(function(dbComp){
        if(req.company){
          // console.log(dbComp);
           res.render("company",{

               Company: dbComp,

           });
        }
    });
  });

};
