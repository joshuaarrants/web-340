/*
============================================
; Title: Exercise 5.2
; Author: Professor Krasso
; Date: 28 August 2018
; Modified By: Josh Arrants
; Description: This program displays
;              the use of if else statements
;              using EJS. 
;===========================================
*/

//requires express and puts it in a variable
var express = require("express");
//requires node's built in http module
var http = require("http");
//requires the path 
var path = require("path");

//calls express() and puts new express application inside the app variable
app = express();

//Tells Express where the views folder is
app.set("views", path.resolve(__dirname, "views"));
//Sets the app to use the ejs view engine
app.set("view engine", "ejs");


//variable that holds an array of names 
var n = [

  "Joshua",

  "McKayla",

  "Samantha",

  "Lexie"

];

//renders a file called index when you vist the root
app.get("/", function(request, response) {

    response.render("index", {

        names: n

    })

});

//starts a server on port 8080
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});
