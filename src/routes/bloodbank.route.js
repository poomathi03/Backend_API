const express = require('express');

const router = express.Router();
const bloodbankController = require('../controllers/bloodbank.controller');
router.post('/',bloodbankController.createProduct);
router.get('/',bloodbankController.getProduct);
module.exports = router;