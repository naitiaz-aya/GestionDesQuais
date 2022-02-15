const express = require('express');
const router = express.Router();
const blockController = require('../controllers/blockController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.use(authController.restrictTo('admin'));
router.route('/').post(blockController.createBlock);
router.route('/getAllblock').get(blockController.getAllBlock);

module.exports = router;