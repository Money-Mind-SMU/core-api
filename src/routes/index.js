const express = require('express');
const pet = require('./pet');
const categories = require('./categories');
const users = require('./users')

const router = express.Router();
router.get('/', (req, res) => {
  res.send('API is working');
});

router.use('/', users);
router.use('/category', categories);


module.exports = router;
