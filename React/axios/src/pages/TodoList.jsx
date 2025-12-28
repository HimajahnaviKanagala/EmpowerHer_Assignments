import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/TodoService";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title} - {todo.completed ? "Completed" : "Pending"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
