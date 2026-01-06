import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../services/todo.service"

export default function Todos() {
  const { user } = useAuth()
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState("")

  // READ
  useEffect(() => {
    if (!user) return
    getTodos(user.uid).then(setTodos)
  }, [user])

  // CREATE
  const handleAdd = async () => {
    if (!title.trim()) return
    await addTodo(user.uid, { title })
    setTodos(await getTodos(user.uid))
    setTitle("")
  }

  // UPDATE (toggle completed)
  const toggleTodo = async (todo) => {
    await updateTodo(user.uid, todo.id, {
      completed: !todo.completed,
    })
    setTodos(await getTodos(user.uid))
  }

  // DELETE
  const removeTodo = async (id) => {
    await deleteTodo(user.uid, id)
    setTodos(await getTodos(user.uid))
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">My Todos</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-2 rounded w-64"
          placeholder="New todo"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between p-3 border rounded mb-2"
        >
          <span
            onClick={() => toggleTodo(todo)}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.title}
          </span>

          <button
            onClick={() => removeTodo(todo.id)}
            className="text-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}
