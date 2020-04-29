var express = require('express');
var mongoose = require('mongoose');
var Schedule = require("../models/schedule");
var Course = require('../models/course');
var User = require('../models/user');
var router = express.Router();

router.route("/login")
//Get All Students
.get(function(req,res,next){
    User.find({"_id": req.body},(err,users)=>{
        if(err) throw err;
        res.json(users);
    })
    //res.render('student-list', { title: 'Express' });
})


router
module.exports = router;
