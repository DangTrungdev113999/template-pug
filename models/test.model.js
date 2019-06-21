const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testSchema = new Schema({
    name: String,
    phone: Number
});

const Test = mongoose.model('Test', testSchema, 'test');

module.exports = Test;