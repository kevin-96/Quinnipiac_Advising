var express = require('express');
var mongoose = require('mongoose');
var Schedule = require("../models/schedule");
var Course = require('../models/course');
var User = require('../models/user');
var router = express.Router();


router.route("/:studentID")
//Get student Schedule
.get((req,res,next) =>{
    User.find({id:req.params.studentID},'schedule',{ lean: true }, function (err, user) {
        if (err) throw err;
        res.json(user);
    });
})

module.exports = router;
