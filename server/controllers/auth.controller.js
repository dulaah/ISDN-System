const { validationResult } = require("express-validator");

const authService = require("../services/auth.service");

const register = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({

            success: false,

            errors: errors.array()

        });

    }

    try {

        const user = await authService.registerUser(req.body);

        res.status(201).json({

            success: true,

            message: "User registered successfully",

            user

        });

    } catch (error) {

        res.status(400).json({

            success: false,

            message: error.message

        });

    }

};

const login = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({

            success: false,

            errors: errors.array()

        });

    }

    try {

        const result = await authService.loginUser(

            req.body.email,

            req.body.password

        );

        res.json({

            success: true,

            message: "Login Successful",

            token: result.token,

            user: result.user

        });

    } catch (error) {

        res.status(401).json({

            success: false,

            message: error.message

        });

    }

};
const profile = async (req, res) => {
    res.json({
        success: true,
        message: "Profile fetched successfully",
        user: req.user
    });
};

module.exports = {
    register,
    login,
    profile
};
