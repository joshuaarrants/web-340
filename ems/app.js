
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));


app.get("/", function(req, res) {
    res.render("index", {
        title: "Home Page"
    });
});

app.get("/list", function(req, res) {
    res.render("list", {
        title: "Delete Employees"
    });
});

app.get("/view", function (req, res) {
    res.render("view", {
        title: "View Employees"
    });
});

app.get("/new", function(req, res) {
    res.render("new", {
        title: "Add Employees"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});