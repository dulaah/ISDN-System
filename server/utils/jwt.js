const jwt=require("jsonwebtoken");

const generateToken=(user)=>{

    return jwt.sign(

        {

            id:user.user_id,

            role:user.role_id

        },

        process.env.JWT_SECRET,

        {

            expiresIn:"1d"

        }

    );

}

module.exports=generateToken;