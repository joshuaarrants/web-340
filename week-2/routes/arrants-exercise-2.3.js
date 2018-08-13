/*
============================================
; Title: Exercise 2.3
; Author: Professor Krasso
; Date: 6 August 2018
; Modified By: Josh Arrants
; Description: This program displays 
; how to run Express/NodeJS routes on a local server.
;===========================================
*/

var express = require("express");
var http = require("http");

var app = express();

//routes 
app.get("/", function(req, res) {
    res.end("Welcome to my homepage!");
});

app.get("/about", function(req, res){
    res.end("Welcome to the about page!");
});

app.get("/contact", function(req, res){
    res.end("Welcome to the contact page!");
});

app.use(function(req, res){
    res.statsCode = 404;
    res.end("404!");
});

http.createServer(app).listen(3000, function(){
    console.log("Application started on port:", 3000);
});