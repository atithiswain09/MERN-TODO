const mongoose=require("mongoose");



async function ConnectDB(){


   await  mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("Connected To DB Succesfully!!");

    }).catch((err)=>{
        console.error(err);
    })
}

module.exports=ConnectDB;