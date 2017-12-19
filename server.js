var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./config/passport");
const exphbs = require("express-handlebars");
var methodOverride = require('method-override');
var PORT = process.env.PORT || 8080;
var db = require("./models");
var app = express();
var path = require('path')

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//app.use("/static/", express.static(path.join(__dirname, "/public/")));


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());




require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function() {

  app.listen(process.env.PORT || PORT, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

});
