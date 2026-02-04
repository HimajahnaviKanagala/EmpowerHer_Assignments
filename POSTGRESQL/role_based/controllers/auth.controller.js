import supabase from "../config/supabase.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (role && !["ADMIN", "USER", "MANAGER"].includes(role)) {
      return res
        .status(400)
        .json({ message: "Role should user, admin or manager!" });
    }
    const { data: existingUser } = await supabase
      .from("userrs")
      .select()
      .eq("email", email)
      .maybeSingle();
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const payload = {
      email,
      name,
      password: hashedPassword,
    };
    if (role) payload.role = role;

    const { data, error } = await supabase
      .from("userrs")
      .insert(payload)
      .select("name, email, role");
   
      if (error) throw error;
    res.status(201).json({ message: "User SignedUp Successfully!" , data});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login=async(req, res)=>{
    try {
        const{email, password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required!"})
        }

        const{data:user, error}= await supabase.from("userrs").select().eq('email', email).maybeSingle();

        if(!user){
            return res.status(404).json({message:"User not found!"});
        }
        const isMatch=await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invlaid credentials"});
        }

        const token=jwt.sign(
            {id:user.id, role:user.role},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        );

        const response={
            id:user.id,
            name:user?.name,
            email:user?.email,
            role:user?.role,
            token
        }
        if(error) throw error;
        res.status(200).json({message:"User fetched Successfully", response});
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};
