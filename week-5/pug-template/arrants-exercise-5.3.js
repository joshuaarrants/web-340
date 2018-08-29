/*
============================================
; Title: Exercise 5.3
; Author: Professor Krasso
; Date: 28 August 2018
; Modified By: Josh Arrants
; Description: This program the use of the 
;              pug view engine.  
;===========================================
*/

//requires express and puts it in a variable
var express = require("express");
//requires node's built in http module
var http = require("http");
//requires pug and puts it in a varialbe
var pug = require("pug");
//requires the path and puts it in a variable 
var path = require("path");

//calls express() and puts new express application inside the app variable
var app = express();

//Tells Express where the views folder is
app.set("views", path.resolve(__dirname, "views"));

//Sets the app to use the ejs view engine
app.set("view engine", "pug");

//renders a file called index when you vist the root
app.get("/", function(request, response) {

    response.render("index", {

        message: "This example is using Pug's view engine!"

    });

});

//starts a server on port 8080
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!")
});