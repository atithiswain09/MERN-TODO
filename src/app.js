const express=require("express");
const app=express();
const cookieParser = require("cookie-parser");
const totdosRouter=require('../src/router/todos.routes');
//----->Rote Imported Succesfully
const authRoutes=require('../src/router/Auth.routes');

app.use(express.json());
app.use(cookieParser());//It help To Read the Cookie 


app.use("/api/auth", authRoutes);
app.use('/api/v1/todos',totdosRouter);
// app.use is a middle ware which is help use to how to pass one Data
//When Someone Requesting this Path then app.use will pass the data to There Requested Route to! 
module.exports=app;