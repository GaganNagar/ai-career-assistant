const userModel = require("../models/user.model") 


async function registerUserController(req,res){
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        return res.status(400).json({
            success:false,
            message:"username,email and password are required"
        })
    }

    try {
        const user = await userModel.create({username,email,password})
        res.status(201).json({
            success:true,
            message:"user created successfully",
            user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"failed to create user",
            error:error.message
        })
    } 
}

module.exports = {
    registerUserController
}
