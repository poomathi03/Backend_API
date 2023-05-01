const express = require('express');

const router = express.Router();
const outpatientController = require('../controllers/outpatient.controller');
router.post('/',outpatientController.createPatient);
router.get('/',outpatientController.getPatient);
module.exports = router;