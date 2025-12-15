import { useState, useEffect } from "react";
import TodoCard from "./TodoCard";
function TodoList(){
    const [todos, setTodos]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response)=>response.json())
            .then((data)=>{
                setTodos(data.slice(0,15));
            });

            return () =>{
                alert("Cleanup Worked!")
            };
    },[]);

    return (
        <div>
            <h2>Todo List</h2>
            {todos.map((todo)=>(
                <TodoCard
                  key={todo.id}
                  userId={todo.userId}
                  title={todo.title}
                  completed={todo.completed}
                  />
            ))}
        </div>
    );
}
export default TodoList;