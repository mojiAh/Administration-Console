// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose	   = require('mongoose');

// configuration ===========================================

// config files
var db = require('../server/config/db');

// set our port
var port = process.env.PORT || 3000;

// Set global mongoose promise library
mongoose.Promise = global.Promise;

// connect to your mongoDB database
mongoose.connect(db[app.settings.env],function(err,response){ // "dev" or "test" or "production"
    if(err) {
        console.error('Error connecting to Mongo');
        return;
    }
});


// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + "/../public"));

// routes ==================================================
require('../server/routes/mainRouter')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:3000
app.listen(port);

// primitive error handler
app.on('error', function(err) {
    console.error('server error: ' + err);
});

// shoutout to the user
console.log('Application started on port ' + port);

// expose app
exports = module.exports = app;
