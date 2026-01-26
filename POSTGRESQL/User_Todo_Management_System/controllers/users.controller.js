import supabase from '../config/supabase.js';

export const signupUser = async (req,res)=>{
    try{
        const{name, email, password}= req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"All fields are required!"});
        }
        const{data:existingUser} = await supabase
        .from('users_todo')
        .select('id')
        .eq('email', email)
        .single();
        if(existingUser){
            return res.status(409).json({message:"Email already exists!"});
        }
        const {error}= await supabase.from('users_todo').insert([
            {name, email, password}
        ]);
        if (error) throw error;
        res.status(201).json({message:"User registered Successfully"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
};