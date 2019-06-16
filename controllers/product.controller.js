const Product = require('../models/product.model');

module.exports.products = async (req, res, next) => {
    const products = await Product.find();
    res.render('index.pug', {
        module: 'products',
        products
    });
}