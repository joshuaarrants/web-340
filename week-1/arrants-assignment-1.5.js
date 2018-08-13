/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 31 July 2017
; Modified By: Josh Arrants
; Description: This program builds a web server
;              and will display a body message on
;              the server. 
;===========================================
*/
 
var http = require("http");

function processRequest(req, res) {

var body = "Hello Web World";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);