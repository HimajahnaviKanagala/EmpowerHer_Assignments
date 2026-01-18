import { readData, writeData } from "../model/todo.model.js";

export const getTodos = (req, res) => {
  const data = readData();
  res.status(200).json(data.todos);
};

export const addTodos = (req, res) => {
  const data = readData();
  const newTodo = {
    id: Date.now(),
    title: req.body.title,
    completed: false,
  };
  data.todos.push(newTodo);
  writeData(data);
  res.status(201).json(newTodo);
};

export const updateTodo = (req, res) => {
  try {
    const data = readData();
    const todo = data.todos.find((t) => String(t.id) === String(req.params.id));
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    todo.title = req.body.title || todo.title;
    todo.completed = req.body.completed ?? todo.completed;
    writeData(data);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteTodo = (req, res) => {
  const data = readData();
  const todo = data.todos.filter((t) => String(t.id) !== String(req.params.id));
  if (todo.length === data.todos.length) {
    return res.status(404).json({ message: "Todo not found" });
  }
  data.todos = todo;
  writeData(data);
  res.status(200).json({ message: "Todo deleted Successfully" });
};
