const express = require('express');
const router = express.Router();
const boatController = require('../controllers/boatController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.route('/').post(boatController.createBoat);
router.route('/getAllboat').get(boatController.getAllBoat);

module.exports = router;