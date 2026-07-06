const { RegionalDistributionCenter } = require("../models");

const getAllRDCs = async () => {
    return await RegionalDistributionCenter.findAll();
};

module.exports = {
    getAllRDCs
};