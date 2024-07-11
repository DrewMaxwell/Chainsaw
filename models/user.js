const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 user: String,
 email: String,
 password: String,
 isAdmin: Boolean
});

module.exports = mongoose .model('User', userSchema)