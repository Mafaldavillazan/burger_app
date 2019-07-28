
var PORT = process.env.PORT || 8080;

//---------------------------------
//            PACKAGES 
//---------------------------------

//Requiring Express
var express = require("express");

var app = express();
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Requiring Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");