var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated.js");


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
<<<<<<< HEAD
      console.log('yo');
      //res.sendFile(path.join(__dirname, "../public/members.html"));
      res.render("members", { hello: "world"});
=======
      res.render('members',{ hello: "world"});
>>>>>>> 9a6efff6efe2046cfe6d0fc1764a98fb9caab7d0
    });




};
