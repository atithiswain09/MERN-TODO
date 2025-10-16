//importing Mongoose 
const mongoose = require('mongoose');



// Creating a Scema Object which is Help use how data are Store in MongoseDB

const TodoScema=new mongoose.Schema(
    {
        // this the Title which is define the all title 
        title:{
            type:String,
            require:[true,'Title Is Required...'],
            trim:true,
            maxlength:200

        },
        //  You add the what kind of the Work You want to add in Your Todolist
        description:{
            type:String,
            trim:true,
            default:'',

        },
        //   After Complition it  what kind of work You want to Do  , this Feield will define 
        completed:{
            type:Boolean,
            default:false
        }
       
    },
    {   //this is  the Time stamp which is defining when Your data is define 
       timestamps: true
    }
)


const TodoModel=mongoose.model("todos",TodoScema);

module.exports=TodoModel;