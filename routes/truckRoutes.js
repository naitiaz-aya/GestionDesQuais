const express = require('express');
const router = express.Router();
const truckController = require('../controllers/truckController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.route('/').post(truckController.createTruck);
router.route('/getAlltruck').get(truckController.getAllTruck);

module.exports = router;