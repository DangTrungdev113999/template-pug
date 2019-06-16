const Product = require('../models/product.model');

module.exports.products = async (req, res, next) => {
    const products = await Product.find();
    res.render('index.pug', {   
        module: 'products',
        products
    });
};

module.exports.addProduct = async (req, res, next) => {
    res.render('index.pug', {
        module: 'addProduct'
    })
};

module.exports.postproductInfo = async (req, res, next) => {
    req.body.image = req.file.path.split('\\').slice(1).join('\\');
    Product.create(req.body);
    res.redirect('/product');
}

module.exports.deleteProduct = async (req, res, next) => {
    const id = req.params.productId;
    await Product.remove({_id: id}).exec((err, result) => {});
    res.redirect('/product');
}