const jwt = require('jsonwebtoken');
const userModel=require("../models/userAuth.models")

const authMiddleware=async(req,res,next)=>{
   const token= req.cookies.token;

   if(!token){
    res.status(401).json({
        message:"You Don`t have the Token !!Login Again"
    }) }

    try{
        // Decoded the Token [jwt.verify]
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        // USE find Method to find the user 
        const user=await userModel.findOne({
            _id:decoded.id
        })
        req.user=user
        next();

    }catch(err){
        console.error("Unothorise Acees ,Login Again!!");
        return res.status(401).json({
            message:"Inavalid Token,pleass Login Again!!!"
            ,err
        })
    }
  
}



module.exports={authMiddleware}