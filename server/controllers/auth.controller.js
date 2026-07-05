const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {

    res.json({
        message:"Register API"
    });

};

const login = async (req, res) => {

    res.json({
        message:"Login API"
    });

};

module.exports={
    register,
    login
}