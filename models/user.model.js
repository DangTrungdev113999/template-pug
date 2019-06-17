const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema =  new Schema({
    name: String,
    image: String,
    phone: Number,
    birthDay: Date,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;