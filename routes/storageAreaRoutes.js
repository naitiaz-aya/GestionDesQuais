const express = require('express');
const router = express.Router();
const storageAreaController = require('../controllers/storageAreaController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.use(authController.restrictTo('admin'));
router.route('/').post(storageAreaController.createStorageArea);
router.route('/getAllstorageArea').get(storageAreaController.getAllStorageArea);

module.exports = router;