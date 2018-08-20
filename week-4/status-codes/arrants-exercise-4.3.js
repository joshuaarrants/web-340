/*
============================================
; Title: Exercise 4.3
; Author: Professor Krasso
; Date: 20 August 2018
; Modified By: Josh Arrants
; Description: This program demonstrates
;              the use of a http status 
;              code errors.
;===========================================
*/

//requires node's built in http module
var express = require("express");
//requires express and puts it in a variable
var http = require("http");
//calls express() and puts new express application inside the app variable
var app = express();

//function that gets the status code 404
app.get("/not-found", function(req, res) {
    //sets the status code to 404
    res.status(404);
    //sets the error message
    res.json({

        error: "404 Error - Resource not found."

    })

});

//function that gets the status code 200
app.get("/ok", function(req, res) {
    //sets the status code to 200
    res.status(200);
    //sets the message 
    res.json({

        message: "Status Code 200 - Page loaded correctly."

    })

});

//function that gets the status code 501
app.get("/not-implemented", function(req, res) {
    //sets the status code to 501
    res.status(501);
    //sets the error message
    res.json({

        error: "501 Error - Page not implemented."

    })

});

//creates a server to listen on port 8080
http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080!");

});