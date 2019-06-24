const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bannerSchema =  new Schema({
    name: String,
    iamge: String, 
    ordering: Number, 
    content: String,
    status: Number
});

const Banner = mongoose.model('Banner', bannerSchema, 'banner');

module.exports = Banner;