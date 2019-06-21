const express = require('express');

const multer = require('multer');

const controller = require('../controllers/account.controller');

const router = express.Router();
const upload = multer({ dest: './public/uploads/account' });

router.get('/', controller.accounts);

router.get('/addAccount', controller.addAccount);
router.post('/addAccount',
            upload.single('image'), 
            controller.postAccountInfo);

router.get('/deleteAccount/:accountId', controller.deleteAccount);

router.get('/updateAccount/:accountId', controller.updateAccount);
router.post('/updateAccount/:accountId', 
            upload.single('image'), 
            controller.postUpdateAccount);


module.exports = router;

