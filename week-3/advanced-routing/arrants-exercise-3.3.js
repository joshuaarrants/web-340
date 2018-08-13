/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 13 August 2018
; Modified By: Josh Arrants
; Description: This program displays
;              the use of advanced routing 
;              within express
;===========================================
*/

http = require("http");
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

app.get("/:productId", function(req, res){
    var productId = parseInt(req.params.productId, 10);

    res.render("index", {
        productId: productId
    });
});

//creates a server to listen on port 3000
http.createServer(app).listen(3000, function(){
    console.log("Application started and listening on port 3000.");
});