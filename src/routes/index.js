const express = require('express');
const categories = require('./categories');
const users = require('./users')
const analytic = require('./analytics')

const router = express.Router();
router.get('/', (req, res) => {
  res.send('API is working');
});

router.use('/', users);
router.use('/category', categories);
router.use('/analytic', analytic);


module.exports = router;
