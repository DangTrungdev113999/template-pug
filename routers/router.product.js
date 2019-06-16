const express = require('express');

const controller = require('../controllers/product.controller.js');

const router = express.Router();

router.get('/',  controller.products);


module.exports = router;

