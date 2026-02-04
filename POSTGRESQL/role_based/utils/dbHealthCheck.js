import supabase from "../config/supabase.js";
const dbHelalthCheck = async()=>{
    try{
        const {error}= await supabase.from("userrs").select("id").limit(1);
        if(error){
            console.log("Supabase connection failed");
            process.exit(1);
        }
        console.log("Supabase connection successful!")
    }catch(error){
        console.log("Error occured!")
    }
}

export default dbHelalthCheck;