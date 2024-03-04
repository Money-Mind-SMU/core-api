const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/controllerUser')
const {authentication} = require('../../middleware/auth')

router.get('/', (req, res) => {
  res.send('User');
});

router.post('/login',Controller.login)


module.exports = router;
