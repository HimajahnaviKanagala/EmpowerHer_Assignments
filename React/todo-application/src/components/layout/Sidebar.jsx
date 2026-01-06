export default function Sidebar({ todos }) {
  return (
    <aside className="w-64 border-r bg-gray-50 p-4 overflow-y-auto">
      <h2 className="mb-4 text-lg font-medium text-gray-700">
        Todos
      </h2>

      {todos.length === 0 && (
        <p className="text-sm text-gray-500">
          No todos available
        </p>
      )}

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-2 rounded cursor-pointer ${
              todo.completed
                ? "bg-green-100 text-green-700"
                : "bg-white text-gray-700"
            }`}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </aside>
  )
}
