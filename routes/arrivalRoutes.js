const express = require('express');
const router = express.Router();
const arrivalController = require('../controllers/arrivalController');
const authController = require('./../controllers/authController');

router.use(authController.protect);
router.route('/').post(arrivalController.createArrival);
router.route('/getAllarrival').get(arrivalController.getAllArrival);

module.exports = router;