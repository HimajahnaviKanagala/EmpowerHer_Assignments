import supabase from "../config/supabase.js";

export const createTodos = async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    if (!title || !userId) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const { data: user } = await supabase
      .from("users_todo")
      .select("id")
      .eq("id", userId)
      .single();
    if (!user) {
      return res.status(409).json({ message: "User not found!" });
    }
    const { error } = await supabase
      .from("todos")
      .insert([{ title, description, user_id: userId }]);
    if (error) throw error;
    res.status(201).json({ message: "Todo Created Successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTodos = async (req, res) => {
  try {
    const { userId } = req.params;
    const { data: todos, error } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", userId);
    if (error) throw error;
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const { data, error } = await supabase
      .from("todos")
      .update(req.body)
      .eq("id", todoId)
      .select();
    if (!data.length) {
      return res.status(404).json({ message: "Todo not found!" });
    }
    if (error) throw error;
    res.json({ message: "Todo updated sucessfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const { data, error } = await supabase
      .from("todos")
      .delete()
      .eq("id", todoId)
      .select();
    if (!data.length) {
      return res.status(404).json({ message: "Todo not found!" });
    }
    if (error) throw error;
    res.json({ message: "Todo deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
