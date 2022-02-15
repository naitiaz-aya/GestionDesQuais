const express = require('express');
const router = express.Router();
const portController = require('../controllers/portController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.use(authController.restrictTo('admin'));
router.route('/').post(portController.createPort);
router.route('/getAllport').get(portController.getAllPort);

module.exports = router;