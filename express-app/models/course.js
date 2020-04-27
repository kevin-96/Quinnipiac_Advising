var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Student = require("./user").schema

var coursesSchema = new Schema(
{
	courseName:{ type: String, required: true},
	courseNumber: { type: String, required: true },
	numCredit: {
		type: Number,
		required: true
	},
	instructor: {
		type: String,
		required: true
	},
	semesterOffered: {
		type: String,
		required: true
	},
	students: [{type:Schema.Types.ObjectId,ref:'user'}]
},
{
	timestamps: true
});

var course = mongoose.model("course", coursesSchema);
module.exports = course;