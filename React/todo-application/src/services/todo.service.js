import { db } from "./firebase"
import {
  ref,
  push,
  get,
  update,
  remove,
} from "firebase/database"

/**
 * READ: Get all todos for a user
 */
export const getTodos = async (uid) => {
  const snapshot = await get(ref(db, `todos/${uid}`))

  if (!snapshot.exists()) return []

  return Object.entries(snapshot.val()).map(([id, data]) => ({
    id,
    ...data,
  }))
}

/**
 * CREATE: Add a new todo
 */
export const addTodo = async (uid, todo) => {
  return push(ref(db, `todos/${uid}`), {
    title: todo.title,
    completed: false,
    createdAt: Date.now(),
  })
}

/**
 * UPDATE: Update todo title or status
 */
export const updateTodo = async (uid, todoId, updatedData) => {
  return update(ref(db, `todos/${uid}/${todoId}`), updatedData)
}

/**
 * DELETE: Remove a todo
 */
export const deleteTodo = async (uid, todoId) => {
  return remove(ref(db, `todos/${uid}/${todoId}`))
}
