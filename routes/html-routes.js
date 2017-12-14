var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated.js");
module.exports = function(app) {
  //if user is signed in send to user dash if not redirect to signup
  app.get("/", function(req, res) {
    if (req.user) {
        res.redirect("/members");
      }
      res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    //if user is a signed in send to user dash else send to login
    app.get("/login", function(req, res) {
      if (req.user) {
        res.redirect("/members");
      }
      res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    //if user is atuhenticated send to user dash
    app.get("/members", isAuthenticated, function(req, res) {
      res.sendFile(path.join(__dirname, "../public/members.html"));
    });

};
