const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.route('/').post(reservationController.createReservation);
router.route('/getAllreservation').get(reservationController.getAllReservation);

module.exports = router;