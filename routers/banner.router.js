const express = require('express');
const multer = require('multer');

const upload = multer({ dest: './public/uploads/banner'});

const controller = require('../controllers/banner.controller.js');

const router =  express.Router();

router.get('/', controller.banners);
router.get('/addBanner', controller.addBanner);
router.post('/addBanner', 
            upload.single('image'),
            controller.postBanner);

router.get('/updateBanner/:bannerId', controller.updateBanner);
router.post('/updateBanner/:bannerId', 
            upload.single('image'), 
            controller.postUpdateBanner);

router.get('/deleteBanner/:bannerId', controller.deleteBanner);

module.exports = router;