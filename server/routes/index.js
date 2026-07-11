const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.routes");
const rdcRoutes = require("./rdc.routes");

router.use("/auth", authRoutes);
router.use("/rdcs", rdcRoutes);

const categoryRoutes = require("./category.routes");

router.use("/categories", categoryRoutes);
module.exports = router;

const productRoutes = require("./product.routes");

router.use("/products", productRoutes);
const dashboardRoutes = require("./dashboard.routes");

router.use("/dashboard", dashboardRoutes);
