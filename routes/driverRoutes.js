const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');
const authController = require('./../controllers/authController');

router.use(authController.protect);
router.route('/').post(driverController.createDriver);
router.route('/getAlldriver').get(driverController.getAllDriver);

module.exports = router;