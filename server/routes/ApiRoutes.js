const express = require('express');
const router = express.Router();
const upload = require('../middleware/UploadFile');

const creationContoller = require('../controller/creations');
const fetchController = require('../controller/fetch');

router.post('/store/create', creationContoller.createStore);
router.post('/brand/create', creationContoller.createBrand);
router.post('/product/create', creationContoller.createProduct);
router.post('/product/manager/create', upload, creationContoller.createProductWithImages);


router.get('/product/:id', fetchController.getProduct);

module.exports = router;