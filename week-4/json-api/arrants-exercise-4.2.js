/*
============================================
; Title: Exercise 4.2
; Author: Professor Krasso
; Date: 20 August 2018
; Modified By: Josh Arrants
; Description: This program demonstrates
;              the use of a basic JSON
;              API example.
;===========================================
*/

//requires node's built in http module
var http = require("http");
//requires express and puts it in a variable
var express = require("express");
//calls express() and puts new express application inside the app variable
var app = express();

//function that gets the employee id, first, and last name 
app.get("/employee/:id", function(req, res){
    //passes the id into the variable employeeId
    var employeeId = parseInt(req.params.id, 10);
    //outputs the employee id, first, and last name
    res.json({
        firstName: "Joshua", 
        lastName: "Arrants",
        employeeId: employeeId
    });
});

//creates a server to listen on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Application started and listening on port 8080.");
});