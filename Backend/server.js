var express = require('express');
var app = express();

// Load mongoose package
var mongoose = require('mongoose');

// Connect to MongoDB and create/use database called SmartHardHat
mongoose.connect('mongodb://localhost/smartHardHat');

var helmets = require('./routes/helmets');
app.use('/helmetList', helmets);

// make server port
var PORT= process.env.PORT || 3000;

// this middleware load our static files like CSS, JS, HTML to our server
app.use(express.static(__dirname + "/../Client"));


//listening to port
app.listen(PORT , function () {
    console.log('Server is runnig on port '+ PORT);
});