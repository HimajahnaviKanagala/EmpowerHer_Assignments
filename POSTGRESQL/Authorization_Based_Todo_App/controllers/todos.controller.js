import supabase from "../config/supabase.js";

export const createTodo = async (req, res) => {
  const { title } = req.body;

  const { data, error } = await supabase
    .from("todos")
    .insert([{ title, user_id: req.user.userId }]);

  if (error) return res.status(400).json({ message: error.message });

  res.status(201).json(data);
};

export const getTodos=async(req,res)=>{
    try{
        const {data, error}= await supabase
        .from("todos")
        .select("*")
        .eq("user_id", req.user.userId);
        if(error){
            return res.status(400).json({message:error.message});
        }
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

export const updateTodo=async(req,res)=>{
    try{
        const {id}= req.params;
        const {title, completed}= req.body;

        const {data: todo, error: findError} = await supabase
        .from("todos")
        .select("id, user_id")
        .eq("id", id)
        .single();

        if(findError || !todo){
            return res.status(404).json({message:"Todo Not Found"});
        }

        if(todo.user_id!== req.user.userId){
            return res.status(403).json({message:"Forbidden"});
        }
        const {data, error}= await supabase
        .from("todos")
        .update({title, completed})
        .eq("id", id)
        .select()
        .single();

        if(error){
            return res.status(400).json({message:error.message});
        }
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

export const deleteTodo=async (req,res)=>{
    try{
        const {id}= req.params;
        const { data: todo, error: findError } = await supabase
      .from("todos")
      .select("id, user_id")
      .eq("id", id)
      .single();

    if (findError || !todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (todo.user_id !== req.user.userId) {
      return res.status(403).json({ message: "Forbidden" });
    }
    const {error}=await supabase
    .from("todos")
    .delete()
    .eq("id", id);

    if(error){
        return res.status(400).json({message:error.message});
    }
    res.status(204).json({message:"Todo Deleted Sucessfully!"});
    }catch(error){
        res.status(500).json({message:error.message})
    }
};