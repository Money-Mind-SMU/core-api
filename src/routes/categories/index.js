const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/controllerCategories')


router.post('/',Controller.getCategory)

module.exports = router;
