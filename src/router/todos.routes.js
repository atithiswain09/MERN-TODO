const express=require('express');
const router=express.Router()
const {createTodo,getTodos,updateTodo,deleteTodo}=require("../controller/todos.controller");
const {authMiddleware}=require("../middlewares/auth.middlewares");



//Create Todo ------>
router.post('/', authMiddleware,createTodo);
router.get('/user/:id',authMiddleware,getTodos )
router.patch('/user/:id',authMiddleware,updateTodo);
router.delete('/user/:id',authMiddleware,deleteTodo)

module.exports=router;


