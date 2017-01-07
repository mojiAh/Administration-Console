var express = require('express');
var router = express.Router();

//
var mongoose = require('mongoose');
var helmet = require('../models/helmets');


/* GET /helmets listing. */
router.get('/', function(req, res, next) {
    helmet.find(function (err, helmets) {
        if (err) return next(err);
        console.log(helmets);
        res.json(helmets);
    });
});
module.exports = router;
