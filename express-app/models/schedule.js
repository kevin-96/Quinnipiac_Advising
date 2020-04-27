var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var course = require("./course").schema;

var scheduleSchema = new Schema({
	semester: String,
	courses:[course]
},
{
	timestamps: true
});

var schedule = mongoose.model("schedules", scheduleSchema);
module.exports = schedule;