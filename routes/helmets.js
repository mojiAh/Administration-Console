var express = require('express');
var router = express.Router();

var helmet = require('../models/helmets');


/* GET /helmets listing. */
router.get('/', function(req, res, next) {
    helmet.find(function (err, helmets) {
        if (err) return next(err);
        res.json(helmets);
    });
});


/* POST /helmets */
router.post('/', function(req, res, next) {
   console.log(req.body);

});


/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
    helmet.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
    helmet.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;
