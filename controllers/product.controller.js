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

    req.body.image = (req.file) ? req.file.path.split('\\').slice(1).join('\\') : '';
    req.body.status = (req.body.status) ? req.body.status : '0';
    Product.create(req.body);
    res.redirect('/product');
}

module.exports.deleteProduct = async (req, res, next) => {
    const id = req.params.productId;
    await Product.remove({_id: id}).exec((err, result) => {});
    res.redirect('/product');
}

module.exports.productDetail = async (req, res, next) => {
    const id = req.params.productId;
    const product = await Product.findById(id);

    res.render('index.pug', {
        module: 'productDetail',
        product: product
    });
}

module.exports.updateProduct = async (req, res, next) => {
    const id = req.params.productId;
    const product = await Product.findById(id);

    res.render('index.pug', {
        module: "updateProduct",
        product
    });
}

module.exports.postUpdateProduct = async (req, res, next) => {
    const id = req.params.productId;
    const product = await Product.findById(id);

    req.body.image = (req.file) ? 
                    req.file.path.split('\\').slice(1).join('\\') : 
                    product.image;
    req.body.status = (req.body.status) ? req.body.status : '0';

    Product.update(product, req.body).exec((err, result) => {});
    res.redirect('/product');
}