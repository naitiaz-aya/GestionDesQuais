const express = require('express');
const router = express.Router();
const blockPartController = require('../controllers/blockPartController');
const authController = require('../controllers/authController');

router.use(authController.protect);
router.route('/').post(blockPartController.createBlockPart);
router.route('/getAllblockPart').get(blockPartController.getAllBlockPart);

module.exports = router;