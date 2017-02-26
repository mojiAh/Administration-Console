var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String, default: ''},
    firstname: { type: String, default: ''},
    lastname : { type: String, default: ''} ,
    createdAt: Date
});

module.exports = mongoose.model('User', UserSchema);

