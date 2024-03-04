const express = require('express');
const router = express.Router();
// const enrollmentController = require('../../controllers/enrollment');


router.get('/', (req, res) => {
  res.send('Community');
});


module.exports = router;
