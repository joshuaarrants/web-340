/*
============================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 6 August 2018
; Modified By: Josh Arrants
; Description: This program displays
;              the use of EJS view engine
;===========================================
*/

var http = require("http");
var express = require("express");
var path = require("path");

var app = express();

//Tell Express the views are in the "views" directory
app.set("views", path.resolve(__dirname,"views"));
//Tell Express to use the EJS view engine
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index", {
        firstName: "Joshua",
        lastName: "Arrants",
        address: "Unknown Location"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080.");
});