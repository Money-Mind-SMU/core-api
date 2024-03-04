const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/controllerCategories')


router.post('/nearest', Controller.getCategories);
router.post('/',Controller.create);

module.exports = router;
