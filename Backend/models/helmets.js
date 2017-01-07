// Load mongoose package
var mongoose = require('mongoose');

// Create a schema
var helmetSchema = new mongoose.Schema({
    id: Number,
    firstName: { type: String, required: true },
    middleName: String,
    lastName: String,
    title: String,
    description: String,
    location: String,
    imageUrl: String,
    lastUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('helmetList', helmetSchema);

