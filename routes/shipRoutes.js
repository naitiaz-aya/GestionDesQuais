const express = require('express');
const router = express.Router();
const shipController = require('../controllers/shipController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.route('/').post(shipController.createShip);
router.route('/getAllship').get(shipController.getAllShip);

module.exports = router;