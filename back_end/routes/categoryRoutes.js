const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController.js');

router.get('/', categoryController.getAllCategorys);
router.post('/', categoryController.createCategory);

module.exports = router;