var express = require('express');
var router = express.Router();

var User = require('./model');

router.post('/login', function(req, res, next){
    User.findOne({username : req.body.username , password: req.body.password},function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/register', function(req, res) {
    User.create(req.body, function (err, post) {
        if (err) return err;
        res.json(post);
    });
});

router.put('/:id', function(req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
