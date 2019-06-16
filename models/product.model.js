const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema =  new Schema({
    name: String,
    price: Number,
    sale_price: Number,
    content: String
});

const Product = mongoose.model('Product', productSchema, 'product');

module.exports = Product;