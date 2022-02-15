const express = require('express');
const router = express.Router();
const containerController = require('../controllers/containerController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.use(authController.restrictTo('admin'));
router.route('/').post(containerController.createContainer);
router.route('/getAllcontainer').get(containerController.getAllContainer);

module.exports = router;