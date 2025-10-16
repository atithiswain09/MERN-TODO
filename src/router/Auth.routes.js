const express=require('express');
const router=express.Router();
const {SignUpuserController,LogInuserController}=require('../controller/AuthTodo.controller');



// We are Make a Feture CALLED SignUpUser[this is the Fteture Where user Add his Details for Use Todo...]
router.post('/signUp',SignUpuserController);
router.post('/LogIn',LogInuserController);



module.exports=router