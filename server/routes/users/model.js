var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String, default: ''},
    name: { type: String, default: ''},
    email: { type: String, default: ''} ,
    createdAt: Date
});

module.exports = mongoose.model('User', UserSchema);

