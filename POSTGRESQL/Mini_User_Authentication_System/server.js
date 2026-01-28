import express from "express";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();
const app = express();
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);

app.post("/signup", async (req, res) => {
  try {
    const { name, email, age, location, password } = req.body;
    if (!name || !email || !age || !location || !password) {
      return res.status(400).json({ error: "All fields are required!" });
    }
    const { data: existingUser } = await supabase
      .from("userss")
      .select("id")
      .eq("email", email)
      .single();
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase.from("userss").insert([
      {
        name,
        email,
        age,
        location,
        password: hashedPassword,
      },
    ]);
    if (error) throw error;
    res.status(201).json({ message: "User registered Successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/myprofile", async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ message: "Name is required!" });
    }
    const { data: user, error } = await supabase
      .from("userss")
      .select("*")
      .eq("name", name)
      .single();
    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }
    if (error) throw error;
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
