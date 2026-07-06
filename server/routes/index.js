const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.routes");
const rdcRoutes = require("./rdc.routes");

router.use("/auth", authRoutes);
router.use("/rdcs", rdcRoutes);

module.exports = router;