// require needed models
var systemUserModel = require('./systemUsers/model');


// server/routes/mainRouter.js

var API_BASEPATH 	= 	"/api";
var API_VER_1_URL	= 	API_BASEPATH + "/v1";


// Require .js for each route
var SYSTEMUSER_URL = '/systemUsers';
var systemUsersRoute = require('./systemUsers/route');

module.exports = function(app) {

    // Server Routes to handle API Calls ========

    // Routing ===========================
    // these routes still w/o version number
    app.use(API_BASEPATH + SYSTEMUSER_URL, systemUsersRoute);



};

