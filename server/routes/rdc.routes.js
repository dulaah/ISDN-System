const express = require("express");
const router = express.Router();

const rdcController = require("../controllers/rdc.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/", authMiddleware, rdcController.getAll);

module.exports = router;