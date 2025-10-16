const mongoose = require("mongoose");

const userAuthScema = new mongoose.Schema({
  email:{
    type: String,
  required: true,
  unique: true},

  password: {
    type:String,
  required: true}
});

const UserAuth = mongoose.model("AuthUser", userAuthScema);

module.exports = UserAuth;
// Exporting the Userauth that help use to use  it in another file
