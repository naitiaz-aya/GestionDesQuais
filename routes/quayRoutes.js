const express = require('express');
const router = express.Router();
const quayController = require('../controllers/quayController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.use(authController.restrictTo('admin'));
router.route('/').post(quayController.createQuay);
router.route('/getAllquay').get(quayController.getAllQuay);

module.exports = router;