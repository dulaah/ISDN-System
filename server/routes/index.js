const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.routes");
const rdcRoutes = require("./rdc.routes");

router.use("/auth", authRoutes);
router.use("/rdcs", rdcRoutes);

const categoryRoutes = require("./category.routes");

router.use("/categories", categoryRoutes);
module.exports = router;