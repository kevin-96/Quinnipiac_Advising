var schedule = require("./schedule");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");


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

//an instance method added here to return fullname of the user
userSchema.methods.getName = function () {
	return this.firstname + " " + this.lastname;
  };
  userSchema.plugin(passportLocalMongoose); //adds the user hash and salt fileds to store the user name, the hashed password and salted value
  

var user = mongoose.model("user", userSchema);
module.exports = user;