var schedule = require("./schedule");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema(
{
	firstName:{
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	id: {
		type: Number,
		required: true,
		unique: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	numCredits: {
		type: Number,
		required: false
	},
	schedule: schedule,
	isStudent: {
		type: Boolean,
		required: true
	},
	advisees: {
		type: [String],
		required: false
	}
},
{
	timestamps: true
});

var user = mongoose.model("user", userSchema);
module.exports = user;