var express = require('express');
var app = express();

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
        {"id": 3, "name": "Christine", "location": "Tampere, Finnlayson site", "lastUpdate": "1 Jan 12:34","imageUrl": "img/helmets/christine.png" }
    ];
   res.json(response);
});

//listening to port
app.listen(PORT , function () {
    console.log('Server is runnig on port '+ PORT);
});