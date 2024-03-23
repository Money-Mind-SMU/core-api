const express = require('express');
const router = express.Router();
const analyticsController = require('../../controllers/controllerAnalytic');
const {authentication} = require('../../middleware/auth')

// Define routes
router.get('/', authentication, analyticsController.getAllAnalytics);
router.post('/', authentication, analyticsController.createAnalytics);
router.get('/:id', authentication, analyticsController.getAnalyticsById);
router.put('/:id', authentication, analyticsController.updateAnalytics);
router.delete('/:id', authentication, analyticsController.deleteAnalytics);

module.exports = router;