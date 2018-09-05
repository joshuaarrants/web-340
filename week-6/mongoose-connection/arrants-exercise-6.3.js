/*
============================================
; Title: Exercise 6.3
; Author: Professor Krasso
; Date: 04 September 2018
; Modified By: Josh Arrants
; Description: This program demnostrates how to
;              connect to a mongoDB using mongoose
;===========================================
*/

//requires express and puts it in a variable
var express = require("express");
//requires node's built in http module
var http = require("http");
//requires morgan's logger
var logger = require("morgan");
//requires mongoose
var mongoose = require("mongoose");

//connection link to database
var mongoDB = "mongodb://joshuaa21291:Advo21291@ds231720.mlab.com:31720/ems";

//connects to mongo database
mongoose.connect(mongoDB, {


    useMongoClient: true


});


mongoose.Promise = global.Promise;

//variable to hold database connection 
var db = mongoose.connection;

//database error message
db.on("error", console.error.bind(console, "MongoDB connected error: "));

//database connected message
db.once("open", function() {


    console.log("Application connected to mLab MongoDB instance");


});

//variable the uses the express server
var app = express();
//application uses logger
app.use = (logger('dev'));

//starts a server on port 8080
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});
