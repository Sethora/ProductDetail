const express = require('express');
const router = express.Router();
const fetchController = require('../controller/fetch');

router.get('*/:id', fetchController.getIndex);

module.exports = router;