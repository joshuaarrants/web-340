
// require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var mongoose = require("mongoose");
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

//setup csrf protection

var csrfProtection = csrf({cookie: true});

//application
var app = express();

// initialize the express application
var app = express();

// use statements
app.use(logger("short"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(helmet.xssFilter());
app.use(csrfProtection);
app.use(function(req, res, next) {
    var token = req.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
});

// set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 8080);

// route requests
app.get("/", function (req, res) {
    res.render("index", {
        title: "Home page"
    });
});

app.get("/new", function (req, res) {
    res.render("new", {
        title: "New Employee"
    });
});

app.post("/process", function(req, res) {
   if (!req.body.txtName) {
       res.status(400).send("Entries must have a name");
       return;
   }

   // get the request's form data
   var employeeName = req.body.txtName;
   console.log(employeeName);

   // create a employee model
   var employee = new Employee({
       name: employeeName
   });

   // save
   employee.save(function (error) {
       if (error) throw error;

       console.log(employeeName + " saved successfully!");
   });

   res.redirect("/list");
});

app.get("/list", function(req, res) {
    Employee.find({}, function(error, employees) {
       if (error) throw error;

       res.render("list", {
           title: "Employee List",
           employees: employees
       });
    });
});

app.get("/view/:queryName", function (req, res) {
    var queryName = req.params.queryName;

    Employee.find({'name': queryName}, function(error, employees) {
        if (error) throw error;

        console.log(employees);

        if (employees.length > 0) {
            res.render("view", {
                title: "Employee Record",
                employee: employees
            })
        }
        else {
            res.redirect("/list")
        }

    });
});

http.createServer(app).listen(app.get("port"), function() {
    console.log("Application started on port " + app.get("port"));
});