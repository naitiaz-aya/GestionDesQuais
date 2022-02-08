const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const authController = require('./../controllers/authController');

router.use(authController.protect);
router.route('/').post(companyController.createCompany);
router.route('/getAllcompany').get(companyController.getAllCompany);

module.exports = router;