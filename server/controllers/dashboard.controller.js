const dashboardService = require("../services/dashboard.service");

const summary = async (req, res) => {

    const data = await dashboardService.getSummary();

    res.json({
        success: true,
        data
    });

};ss

module.exports = {
    summary
};