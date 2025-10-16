const AuthModel=require("../models/userAuth.models");
// Succesfully we are Importing the AuthModel 
 const jwt = require('jsonwebtoken');
const bcrypt=require("bcryptjs");
const SignUpuserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user already exists
    const ExistingUser = await AuthModel.findOne({ email });
    if (ExistingUser) {
      return res.status(409).json({ message: "User already exists!" });
    }

    // If not, create the user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await AuthModel.create({
      email,
      password: hashedPassword,
    });

    // Generate a JWT token
    const token = jwt.sign(
      { email: user.email }, // Payload
      process.env.JWT_SECRET, // Secret key (make sure it's written as process.env)
      
    );

    // Send token as cookie
    res.cookie("token", token, {
      httpOnly: true, // prevents client-side JS access
      secure: true, // only for HTTPS
     
    });

    // Response
    res.status(201).json({
      message: "User signed up successfully ✅",
      user,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({
      message: "Internal Server Error ❌",
      error: error.message,
    });
  }
};


const LogInuserController=async(req,res)=>{
      
      try{
          
        // First We check the User Data!!!
        const{email,password}=req.body;
        
        // Check that the User is In Database or not???
        // *[When we work on any Db method then we normally Use Async and Await]
        const user=await AuthModel.findOne({
          email   
        })          
        if(!user){
          // When we send and Res useing Json then allwase Need to return object Format...
          res.status(409).json({message:"User Not Found ,Try Again later!!!😒"})
        }
        //If the UserEmail is Founded then time is Check the User Given Password 
        const isPassword=await bcrypt.compare(password,user.password)
                  // *[bycrypt.compare is Give Use Boolen value that User Enter value and Encrepted Vlaue is Same]
                  if(!isPassword){
                    res.status(400).json({message:"Invalid Password Check The Password!!"});
                  }
                  const token=jwt.sign({email: user.email},process.env.JWT_SECRET);
                  res.cookie=("token",token);
              res.status(200).json({message:"User Login Succesfully",user:{
                Email:user.email
              }})


      }catch (error) {
    console.error("Error during LogIn:", error);
    res.status(500).json({
      message: "Internal Server Error ❌",
      error: error.message,
    });
  }

}









module.exports={SignUpuserController,LogInuserController}