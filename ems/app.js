
var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var logger = require("morgan");
var helmet = require("helmet");
var Employee = require("./models/employee");

// mLab connection

var mongoDB = "mongodb://joshuaa21291:Advo21291@ds231720.mlab.com:31720/ems";

mongoose.connect(mongoDB, {

    useMongoClient: true

});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {

    console.log("Application connected to mLab MongoDB instance");

});


//application
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));
app.use(helmet.xssFilter());




// create a Employee model
var employee = new Employee({
    firstName: "Josh",
    lastName: "Arrants"
});

app.get("/", function(req, res) {
    res.render("index", {
        title: "Home Page"
    });
});

app.get("/list", function(req, res) {
    res.render("list", {
        title: "Delete Employee"
    });
});

app.get("/view", function (req, res) {
    res.render("view", {
        title: "View Employee"
    });
});

app.get("/new", function(req, res) {
    res.render("new", {
        title: "Add Employee"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});