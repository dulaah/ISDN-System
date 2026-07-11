const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const dashboardController = require("../controllers/dashboard.controller");

router.get(
    "/summary",
    authMiddleware,
    dashboardController.summary
);

module.exports = router;