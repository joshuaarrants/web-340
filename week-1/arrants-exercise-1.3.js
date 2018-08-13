/*
============================================
; Title: Exercise 1.3
; Author: Professor Krasso
; Date: 31 July 2017
; Modified By: Josh Arrants
; Description: This program will reference 
;              a url module and will output
;              the different parts of the 
;              url. 
;===========================================
*/ 
var header = require('../header');

//output header
console.log(header.display("Joshua", "Arrants", "Exercise 1.3"));
console.log('\n');

var url = require("url");

var parsedURL = url.parse("https://www.josharrants.com/profile?name==arrants");

//display the different pieces of the url
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);