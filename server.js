var express = require('express');
var app = express();

// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called SmartHardHat
mongoose.connect('mongodb://localhost/smartHardHat');
// Create a schema
var helmetSchema = new mongoose.Schema({
    id: Number,
    name: String,
    location: String,
    imageUrl: String,
    lastUpdate: { type: Date, default: Date.now },
});
// Create a model based on the schema
var helmets = mongoose.model('helmets', helmetSchema);

// Create a helmet in memory
var helmet = new helmets({"id": 1, "name": "mojtaba", "location": "Tampere, site 1",  "imageUrl": "img/helmets/mojtaba.png"});
// Save it to database
helmet.save(function(err){
    if(err)
        console.log(err);
    else
        console.log(helmet);
});

// make server port
var PORT= process.env.PORT || 3000;

// this middleware load our static files like CSS, JS, HTML to our server
app.use(express.static(__dirname + "/Client"));

//Very simple get request come from frontend component
app.get('/helmetList', function (req,res) {
console.log('I got a Get request!');
   var response= [
        {"id": 1, "name": "mojtaba", "location": "Tampere, site 1", "lastUpdate": "1st Jan, 12:00", "imageUrl": "img/helmets/mojtaba.png"},
        {"id": 2, "name": "Bikram", "location": "Tampere, site2", "lastUpdate": "30 Dec, 12:21" ,"imageUrl": "img/helmets/bikram.png"},
        {"id": 3, "name": "Mak", "location": "Tampere, site 1", "lastUpdate": "29 Dec 12:34","imageUrl": "img/helmets/mak.png" },
        {"id": 4, "name": "Christine", "location": "Tampere, Finnlayson site", "lastUpdate": "1 Jan 12:34","imageUrl": "img/helmets/christine.png" }
    ];
   res.json(response);
});

//listening to port
app.listen(PORT , function () {
    console.log('Server is runnig on port '+ PORT);
});