const express = require('express');
const router = express.Router();
const zoneController = require('../controllers/zoneController');
const authController = require('./../controllers/authController');

router.use(authController.protect);
router.route('/').post(zoneController.createZone);
router.route('/getAllzone').get(zoneController.getAllZone);

module.exports = router;