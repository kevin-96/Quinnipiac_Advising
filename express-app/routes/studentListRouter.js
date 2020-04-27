var express = require('express');
var mongoose = require('mongoose');
var Schedule = require("../models/schedule");
var Course = require('../models/course');
var User = require('../models/user');
var router = express.Router();

router.route("/")
//Get All Students
.get(function(req,res,next){
    User.find({"isStudent":true},(err,users)=>{
        if(err) throw err;
        res.json(users);
    })
})
//Add Student
.post(function(req,res,next){
    var user = new User(req.body);
    user.save((err,user)=>{
        if(err) throw err;
        res.end("User " + user.firstName + " created")
    });
});

router.route("/:userID")
//Update User
.put(function(req,res,next){
    User.findOneAndUpdate({id:req.params.userID},req.body,(err,user)=>{
        if(err) throw err;
        res.end("User " + user.firstName + " updated with" + req.body);
    })
})
//Delete student
.delete(function(req,res,next){
    User.findOneAndDelete({id:req.params.userID},(err,user)=>{
        if(err) throw err;
        res.end("User " + user.firstName + " deleted");
    })
})

module.exports = router;


