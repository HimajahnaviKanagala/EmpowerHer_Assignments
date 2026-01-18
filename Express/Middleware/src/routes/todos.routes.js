import express from 'express';
import fs from 'fs';
import validateTodo from '../middleware/validateTodo.middleware.js';
import rateLimiter from '../middleware/rateLimiter.middleware.js';
const router=express.Router();

function readData(){
    return JSON.parse(fs.readFileSync("./db.json","utf-8"));
}
function writeData(data){
    fs.writeFileSync("./db.json",JSON.stringify(data, null, 2));
}
router.post('/add', validateTodo,(req,res)=>{
    const data=readData();
    const newTodo={
        id:Date.now(),
        title:req.body.title,
        completed:false
    };
    data.todos.push(newTodo);
    writeData(data);
    res.status(201).json(newTodo);
});
router.get("/",rateLimiter,(req,res)=>{
    const data=readData();
    res.json(data.todos);
})
router.get("/:todoId",(req,res)=>{
    const data=readData();
    const todo=data.todos.find(t=>String(t.id)===String(req.params.todoId));
    if(!todo){
        return res.status(404).json({error:"Todo not found"});
    }
    res.json(todo);
});
router.put("/update/:todoId",(req,res)=>{
    const data=readData();
    const todo=data.todos.find(t=>String(t.id)===String(req.params.todoId));
    if(!todo){
        return res.status(404).json({error:"Todo not found"});
    }
    todo.title=req.body.title||todo.title;
    todo.completed=req.body.completed??todo.completed;
    writeData(data);
    res.json(todo);
})
router.delete("/delete/:todoId",(req,res)=>{
    const data=readData();
    const newTodos=data.todos.filter(t=>String(t.id)!==String(req.params.todoId));
    if(newTodos.length===data.todos.length){
        return res.status(404).json({error:"Todo not found"});
    }
    data.todos=newTodos;
    writeData(data);
    res.json({message:"Todo deleted successfully"});
})




export default router;