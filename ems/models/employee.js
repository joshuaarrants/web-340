// required

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// define the employeeSchema

var employeeSchema = new Schema({
    name: String
});

// define the employee model

var Employee = mongoose.model("Employee", employeeSchema);

// expose the employee to calling files

module.exports = Employee;
