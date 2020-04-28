var express = require('express');
var mongoose = require('mongoose');
var Schedule = require("../models/schedule");
var Course = require('../models/course');
var User = require('../models/user');
var router = express.Router();


router.route("/:studentID")
    //Add class
    .post(function (req, res, next) {
        course = new Course(req.body);
        User.findOneAndUpdate({ id: req.params.studentID }, { $push: { "schedule.courses": course } }, function (err, user) {
            if (err) throw err;
            res.end("Class Added")
        })
    .get((req, res, next) => {
        User.find({ id: req.params.studentID }, 'schedule', { lean: true }, function (err, user) {
            if (err) throw err;
            res.json(user);
        });
    })
})

router.route("/:studentID/:courseID")
    //Delete Class
    .delete(function (req, res, next) {
        User.findOneAndUpdate({ id: req.params.studentID }, { $pull: { "schedule.courses": { "courseNumber": req.params.courseID } } }, function (err, user) {
            if (err) throw err;
            res.end("Class removed")
        });
    })

//Get student Schedule


module.exports = router;