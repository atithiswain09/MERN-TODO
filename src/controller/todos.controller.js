const todosModel = require("../models/todos.models");

const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    // console.log(req.body);
    //    *Use model and Create Todo---->

    const createdTodo = await todosModel.create({ title, description });

    res.status(201).json({
      message: "Todo Data Created Succesfully..",
      createdTodo,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Somthing Went Worng!!!!..Sorry",
      e: e.message, //this The Error message when You Create Data !!!
    });
  }
};

//
const getTodos = async (req, res) => {
  // Check The Client Filter!!

  try {
    const userId = req.params.id; //We Read the User Url id which is Send from the User
    const userDetails = await todosModel.findById(userId);
    res.status(201).json({
      message: "This Your Data!!!",
      userDetails,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Something Went Worng while you Geting the DataFrom Your Todo",
      e: e.message,
    });
  }
};

const updateTodo = async (req, res) => {
  // *Update the Todo---->
  try {
    const { title, description } = req.body; //step1:Read the User sended data
    const todoId = req.params.id;
    const updatedTodo = await todosModel.findByIdAndUpdate(todoId, {
      title,
      description,
    });
    res.status(201).json({
      message: "Todo Update Succesfully!!!",
      todo: updatedTodo,
    });
  } catch (error) {
    console.error(e);
    res.status(500).json({
      message: "Something Went Worng while you Geting the DataFrom Your Todo",
      e: e.message,
    });
  }
};
const deleteTodo = async (req, res) => {
  //*Delete UserTodo
  try {
    const UserId = req.params.id;

    const DeleteUser = await todosModel.findByIdAndDelete(UserId);

    if (!DeleteUser) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    res.status(200).json({
      message: "User deleted successfully! ✅",
      deletedUser: DeleteUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while deleting user.",
      error: error.message,
    });
  }
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };
