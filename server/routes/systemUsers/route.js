var express = require('express');
var router = express.Router();

var systemUser = require('./model');


/* GET /helmets listing. */
router.get('/', function(req, res, next) {
    systemUser.find(function (err, systemUsers) {
        if (err) return next(err);
        res.json(systemUsers);
    });
});


/* POST /systemUsers */
router.post('/', function(req, res, next) {
    systemUser.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });

});

/* GET /systemUsers/:id */
router.get('/:id', function(req, res, next) {
    systemUser.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


/* PUT /systemUsers/:id */
router.put('/:id', function(req, res, next) {
    systemUser.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /systemUsers/:id */
router.delete('/:id', function(req, res, next) {
    systemUser.findByIdAndRemove(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;
