import Todo from "../models/Todo.js";

const getTodos=async (req,res,next)=>{
    try {
        let todos=await Todo.find()
        res.status(200).json(todos)
    } catch (error) {
        res.status(400).json(error)
    }
}

const postTodo=async (req,res,next)=>{
    let {todoName}=req.body;
    try {
       let newTodo=await Todo.create({
        todoName:todoName
       })
       res.status(201).json(newTodo)
       
    } catch (error) {
        res.status(400).json(error)
    }
}

export {getTodos,postTodo}