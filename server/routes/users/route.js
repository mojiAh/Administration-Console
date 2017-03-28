var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});


var ctrlProfile = require('../../controllers/profile');
var ctrlAuth = require('../../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;

/*

var express = require('express');
var router = express.Router();

var User = require('./model');


router.get('/', function(req, res, next) {
    User.find(function (err, systemUsers) {
        if (err) return next(err);
        res.json(systemUsers);
    });
});

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
*/

