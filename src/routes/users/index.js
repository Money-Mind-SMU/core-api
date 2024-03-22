const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/controllerUser')
const {authentication} = require('../../middleware/auth')


// router.post('login-facebook',Controller.loginFacebook)
// router.post('login-google',Controller.loginGoogle)
// router.get('/users/profile', authentication, Controller.getUsersProfile)
// router.get('/users/last-active', authentication, Controller.getLastActive)
// router.post('/transactions/', authentication, Controller.insertTransactions)


module.exports = router;
