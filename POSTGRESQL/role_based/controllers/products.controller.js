import supabase from "../config/supabase.js";

export const getProducts = async (req, res) => {
  try {
    const { data } = await supabase.from("products").select();

    res.status(200).json({ message: "Products fetched successfully!", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
