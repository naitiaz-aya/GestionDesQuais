const express = require('express');
const router = express.Router();
const quayTypeController = require('../controllers/quayTypeController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.route('/').post(quayTypeController.createQuayType);
router.route('/getAllquayType').get(quayTypeController.getAllQuayType);

module.exports = router;