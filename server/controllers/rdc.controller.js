const rdcService = require("../services/rdc.service");

const getAll = async (req, res) => {
    const rdcs = await rdcService.getAllRDCs();

    res.json({
        success: true,
        data: rdcs
    });
};

module.exports = {
    getAll
};