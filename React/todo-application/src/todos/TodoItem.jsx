import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { updateTodo, deleteTodo } from "../../services/todo.service";
import TodoModal from "./TodoModal";

export default function TodoItem({ todo, setTodos }) {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const updateLocalState = (updatedTodo) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, ...updatedTodo } : t))
    );
  };

  const toggleStatus = async () => {
    const newStatus = !todo.completed;
    try {
      await updateTodo(user.uid, todo.id, { completed: newStatus });

      updateLocalState({ completed: newStatus });
    } catch (error) {
      console.error("Failed to toggle status:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(user.uid, todo.id);

      setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  const handleUpdate = async () => {
    if (!newTitle.trim() || newTitle === todo.title) {
      setIsEditing(false);
      return;
    }

    try {
      await updateTodo(user.uid, todo.id, { title: newTitle });
      updateLocalState({ title: newTitle });
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update title:", error);
    }
  };

  const handleCloseModal = () => {
    setNewTitle(todo.title);
    setIsEditing(false);
  };

  return (
    <>
      <div className="flex justify-between items-center p-3 border rounded mb-2 bg-white shadow-sm">
        <span
          onClick={toggleStatus}
          className={`cursor-pointer flex grow ${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.title}
        </span>

        <div className="flex gap-3">
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Update
          </button>

          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-800 font-medium transition-colors"
          >
            Delete
          </button>
        </div>
      </div>

      <TodoModal
        isOpen={isEditing}
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        onSave={handleUpdate}
        onClose={handleCloseModal}
      />
    </>
  );
}
