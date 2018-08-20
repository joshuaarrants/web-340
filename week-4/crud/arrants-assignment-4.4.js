/*
============================================
; Title: Assignment 4.
; Author: Professor Krasso
; Date: 20 August 2018
; Modified By: Josh Arrants
; Description: This program demonstrates
;              the use of the CRUD method. 
;===========================================
*/
//requires node's built in http module
var express = require("express");
//requires express and puts it in a variable
var http = require("http");
//calls express() and puts new express application inside the app variable
var app = express();

//function that gets a record on the server
app.get("/", function(req, res) {
    res.send("A HTTP GET request has been used.");
});

//function that updates or changes a record on the server 
app.put("/", function(req, res) {
    res.send("An HTTP PUT request has been used.");
});

//function that creates a record on the server
app.post("/", function(req, res) {
    res.send("A HTTP POST request has been used");
});

//function that deletes a record on the server
app.delete("/", function(req, res) {
    res.send("A HTTP DELETE request has been used");
});

//creates a server to listen on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});