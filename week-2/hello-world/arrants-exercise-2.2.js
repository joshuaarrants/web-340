/*
============================================
; Title: Exercise 2.2
; Author: Professor Krasso
; Date: 6 August 2018
; Modified By: Josh Arrants
; Description: This program displays
; how to run Express/NodeJS on a local server.
;===========================================
*/

var express = require("express");
var http = require("http");

var app = express();
app.use(function(req, res){
    console.log("In comes a request to: " + req.url);
    res.end("Hello World!");
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port:", 8080);
});