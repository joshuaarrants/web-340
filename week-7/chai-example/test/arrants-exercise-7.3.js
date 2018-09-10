/*
============================================
; Title: Exercise 7.3
; Author: Professor Krasso
; Date: 10 September 2018
; Modified By: Joshua Arrants
; Description: This program demonstrates
;              test driven development with chai.
;===========================================
*/

var fruits = require("../arrants-fruits");

var chai = require("chai");
var assert = chai.assert;


describe("fruits", function() {

    it("should return an array of fruits", function() {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });

});