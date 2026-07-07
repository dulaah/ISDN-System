const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const productController = require("../controllers/product.controller");

router.get("/",authMiddleware,productController.getAll);

router.get("/:id",authMiddleware,productController.getOne);

router.post("/",authMiddleware,productController.create);

router.put("/:id",authMiddleware,productController.update);

router.delete("/:id",authMiddleware,productController.remove);

module.exports=router;