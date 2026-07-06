const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth.controller");

const {
    registerValidation,
    loginValidation
} = require("../validations/auth.validation");

router.post(
    "/register",
    registerValidation,
    authController.register
);

router.post(
    "/login",
    loginValidation,
    authController.login
);
const authMiddleware = require("../middleware/auth.middleware");

router.get(
    "/profile",
    authMiddleware,
    authController.profile
);
module.exports = router;