// Load mongoose package
var mongoose = require('mongoose');

// Create a schema
var systemUserSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    middleName: String,
    lastName: String,
    title: String,
    description: String,
    location: String,
    imageUrl: String,
    lastUpdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('systemUser', systemUserSchema);

