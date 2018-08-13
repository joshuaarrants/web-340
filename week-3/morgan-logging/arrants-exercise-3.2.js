/*
============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: 13 August 2018
; Modified By: Josh Arrants
; Description: This program displays
;              the use of the morgan logger
;===========================================
*/

var http = require("http");
var express = require("express");
var path = require("path");
var logger = require("morgan")

var app = express();

//Tell Express the views are in the "views" directory
app.set("views", path.resolve(__dirname,"views"));
//Tell Express to use the EJS view engine
app.set("view engine", "ejs");
//Tells Express to use the logger
app.use(logger("dev"));

app.get("/", function(req, res){
    res.render("index", {
        message: "A View of a Morgan Logger Example!"
    });
});

//creates a server to listen on port 3000
http.createServer(app).listen(3000, function(){
    console.log("EJS-Views app started on port 3000.");
});