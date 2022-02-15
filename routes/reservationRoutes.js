const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.use(authController.restrictTo('admin'));
router.route('/').post(reservationController.createReservation);
router.route('/getAllreservation').get(reservationController.getAllReservation);
router.route('/:id').delete(reservationController.deleteReservation);

module.exports = router;