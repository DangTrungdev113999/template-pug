const express = require('express');
const multer  = require('multer');

const controller = require('../controllers/product.controller.js');

const upload = multer({ dest: './public/uploads/' });

const router = express.Router();

router.get('/',  controller.products);

router.get('/addProduct', controller.addProduct);
router.post('/addProduct', 
            upload.single('image'), 
            controller.postproductInfo);

router.get('/delete/:productId', controller.deleteProduct);

router.get('/productDetail/:productId', controller.productDetail);

router.get('/updateProduct/:productId', controller.updateProduct);
router.post('/updateProduct/:productId', 
            upload.single('image'),
            controller.postUpdateProduct);

module.exports = router;

