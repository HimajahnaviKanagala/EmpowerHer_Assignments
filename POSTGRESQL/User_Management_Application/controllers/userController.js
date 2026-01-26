import supabase from "../config/supabase.js";
export const createUser= async(req,res)=>{
    try{
        const {name, email, password, age}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"Name, email and password are required"});
        }
        if(password.length<8){
            return res.status(400).json({message:"Password must be at least 8 characters"});
        }
        if(age && age<18){
            return res.status(400).json({message:"Age must be 18 or above"});
        }
        const {data: existingUser}=await supabase
        .from('users')
        .select('id')
        .eq('email', email)
        .single();
        if(existingUser){
            return res.status(409).json({message:"Email already exists"});
        }
        const {error}= await supabase.from('users').insert([
            {name, email, password, age}
        ]);
        if(error) throw error;
        res.status(201).json({message:"User created successfully"});
    }catch(error){
        res.status(500).json({message:"error.message"});
    }
};

export const getAllUsers= async(req,res)=>{
    try{
        const {data, error}= await supabase.from('users').select('*');
        if(error) throw error;
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message:"error.message"});
    }
};

export const getUserByID= async(req,res)=>{
    try{
        const {id}=req.params;
        const {data, error}= await supabase. from('users').select('*').eq('id', id).single();
        if(!data){
            return res.status(404).json({message:"User not found"});
        }
        if(error) throw error;
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message:"error.message"});
    }
};

export const updateUser= async(req,res)=>{
    try{
        const {id}=req.params;
        const {data,error}= await supabase.from('users').update(req.body).eq('id',id).select();
        if(!data.length){
            return res.status(404).json({message:"User not found"});
        }
        if(error) throw error;
        res.status(200).json({message:"User updated Successfully"});
    }catch(error){
        res.status(500).json({message:"error.message"});
    }
};

export const deleteUser=async(req,res)=>{
    try{
        const {id}=req.params;
        const {data, error}= await supabase.from('users').delete().eq(id, id).select();
        if(!data.length){
            return res.status(404).json({message:"User not found"});
        }
        if (error) throw error;
        res.status(200).json({message:"User deleted Successfully"});
    }catch(error){
        res.status(500).json({message:"error.message"});
    }
};