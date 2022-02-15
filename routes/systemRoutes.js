const express = require('express');
const router = express.Router();
const systemController = require('../controllers/systemController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.use(authController.restrictTo('admin'));
router.route('/').post(systemController.createSystem);
router.route('/getAllsystem').get(systemController.getAllSystem);

module.exports = router;