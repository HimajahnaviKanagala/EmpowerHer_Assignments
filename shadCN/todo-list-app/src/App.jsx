import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function TodoListApp() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), text: todoText, completed: false },
    ]);
    setTodoText("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen flex items-start justify-center p-6 bg-muted/40">
      <div className="w-full max-w-md space-y-6">
        {/* Add Todo */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Todo List</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={addTodo} className="flex gap-2">
              <Input
                placeholder="Add a new todo"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
              />
              <Button type="submit">Add</Button>
            </form>
          </CardContent>
        </Card>

        {/* Todo Items */}
        {todos.length > 0 && (
          <Card className="rounded-2xl">
            <CardContent className="pt-4 space-y-3">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center gap-3"
                >
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id)}
                  />
                  <span
                    className={`text-sm transition-all ${
                      todo.completed
                        ? "line-through text-muted-foreground"
                        : ""
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
