const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const categoryController = require("../controllers/category.controller");

router.get("/", authMiddleware, categoryController.getAll);

router.get("/:id", authMiddleware, categoryController.getOne);

router.post("/", authMiddleware, categoryController.create);

router.put("/:id", authMiddleware, categoryController.update);

router.delete("/:id", authMiddleware, categoryController.remove);

module.exports = router;