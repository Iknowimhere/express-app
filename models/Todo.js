import mongoose from "mongoose";

//schema
let todoSchema=new mongoose.Schema({
    todoName:{
        type:String
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
},
{timestamps:true})

let Todo=mongoose.model("Todo",todoSchema);

export default Todo;