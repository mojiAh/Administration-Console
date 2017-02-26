// Load mongoose package
var mongoose = require('mongoose');

// Create a schema
var systemUserSchema = new mongoose.Schema({
    id:  {type: Number, default: 0},
    firstName: { type: String, default: ''},
    middleName: { type: String, default: ''},
    lastName: { type: String, default: ''},
    title: { type: String, default: ''},
    description: { type: String, default: ''},
    location: { type: String, default: ''},
    imageUrl: String,
    lastUpdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('systemUser', systemUserSchema);
