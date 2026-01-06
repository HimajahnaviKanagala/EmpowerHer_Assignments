import TodoItem from "./TodoItem"

export default function TodoList({ todos, setTodos }) {
  return (
    <div className="flex-1 p-6">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setTodos={setTodos}
        />
      ))}
    </div>
  )
}
