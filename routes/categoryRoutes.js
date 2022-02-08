const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authController = require('./../controllers/authController');

router.use(authController.protect);
router.route('/').post(categoryController.createCategory);
router.route('/getAllcategory').get(categoryController.getAllCategory);

module.exports = router;