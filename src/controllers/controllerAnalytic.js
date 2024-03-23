const jwt = require('../helpers/jwt');
const {
    Analytics
} = require('../database/models');

class AnalyticsController {
    static async getAllAnalytics(req, res, next) {
        try {
            const analytics = await Analytics.findAll();
            return res.status(200).json(analytics);
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }

    static async getAnalyticsById(req, res, next) {
        try {
            const analyticsId = req.params.id;
            const analytics = await Analytics.findByPk(analyticsId);

            if (!analytics) {
                return res.status(404).json({
                    error: 'Analytics record not found'
                });
            }

            return res.status(200).json(analytics);
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }

    static async createAnalytics(req, res, next) {
        try {
            // Assuming authentication is already implemented and user ID is available in req.user.id
            const userId = req.user.id;
            const {
                total_expenses,
                average_expenses,
                monthly_expenses,
                yearly_expenses,
                date
            } = req.body;

            // Validate request body
            if (!total_expenses || !average_expenses || !monthly_expenses || !yearly_expenses || !date) {
                return res.status(400).json({
                    error: 'All fields are required'
                });
            }

            // Create new analytics record
            const newAnalytics = await Analytics.create({
                user_id: userId,
                total_expenses,
                average_expenses,
                monthly_expenses,
                yearly_expenses,
                date
            });

            return res.status(201).json(newAnalytics);
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }

    static async updateAnalytics(req, res, next) {
        try {
            const analyticsId = req.params.id;
            const {
                total_expenses,
                average_expenses,
                monthly_expenses,
                yearly_expenses,
                date
            } = req.body;

            // Validate request body
            if (!total_expenses && !average_expenses && !monthly_expenses && !yearly_expenses && !date) {
                return res.status(400).json({
                    error: 'At least one field is required for updating analytics'
                });
            }

            // Find analytics record by ID
            const analytics = await Analytics.findByPk(analyticsId);

            if (!analytics) {
                return res.status(404).json({
                    error: 'Analytics record not found'
                });
            }

            // Update analytics record
            await analytics.update({
                total_expenses,
                average_expenses,
                monthly_expenses,
                yearly_expenses,
                date
            });

            return res.status(200).json({
                message: 'Analytics record updated successfully'
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }

    static async deleteAnalytics(req, res, next) {
        try {
            const analyticsId = req.params.id;

            // Find analytics record by ID
            const analytics = await Analytics.findByPk(analyticsId);

            if (!analytics) {
                return res.status(404).json({
                    error: 'Analytics record not found'
                });
            }

            // Delete analytics record
            await analytics.destroy();

            return res.status(200).json({
                message: 'Analytics record deleted successfully'
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }
}

module.exports = AnalyticsController;
