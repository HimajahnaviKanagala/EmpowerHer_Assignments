import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function Todos(){
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
           .then(res=>res.json())
           .then(data=>setTodos(data.slice(0,10)));
    },[]);

    return (
        <div>
            <h2>Todos</h2>
            <div className="todo-list">
                {todos.map(todo=>(
                    <Link key={todo.id} to={`/todos/${todo.id}`} className="todo-card">
                        <p><strong>{todo.title}</strong></p>
                        <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
                    </Link> 
                ))}
            </div>
        </div>
    );
};
export default Todos;