const express = require('express');
const router = express.Router();
const shipOwnerController = require('../controllers/shipOwnerModel');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.route('/').post(shipOwnerController.createShipOwner);
router.route('/getAllshipOwner').get(shipOwnerController.getAllShipOwner);

module.exports = router;