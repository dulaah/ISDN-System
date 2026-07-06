const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const registerUser = async (userData) => {

    const existingUser = await User.findOne({
        where: {
            email: userData.email
        }
    });

    if(existingUser){
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(userData.password,10);

    const user = await User.create({

        role_id:userData.role_id,

        first_name:userData.first_name,

        last_name:userData.last_name,

        email:userData.email,

        password:hashedPassword,

        phone:userData.phone

    });

    return user;

};

const loginUser = async(email,password)=>{

    const user = await User.findOne({
        where:{email}
    });

    if(!user){
        throw new Error("Invalid email or password");
    }

    const match = await bcrypt.compare(password,user.password);

    if(!match){
        throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
        {
            id:user.user_id,
            role:user.role_id
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"1d"
        }
    );

    return{
        user,
        token
    };

};

module.exports={
    registerUser,
    loginUser
}