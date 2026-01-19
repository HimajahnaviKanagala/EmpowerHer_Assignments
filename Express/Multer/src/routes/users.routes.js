import express from 'express';
import fs from 'fs';
import uniqueEmail from '../middleware/uniqueEmail.middleware.js';
import upload from '../middleware/upload.middleware.js';
import cloudinary from '../config/cloudinary.config.js';

const router=express.Router();

function readData(){
    return JSON.parse(fs.readFileSync("src/db.json","utf-8"));
}

function writeData(data){
    fs.writeFileSync("src/db.json", JSON.stringify(data, null, 2));
}
router.post("/signup", upload.single("profile"), uniqueEmail, async(req,res)=>{
    try{
        if(!req.file){
            return res.status(400).json({error:"Profile Image is required"});
        }
        const uploadResult=await cloudinary.uploader.upload(req.file.buffer,{folder:"profiles"});
        const data=readData();
        const newUser={
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            profilePic: uploadResult.secure_url
        };
        data.users.push(newUser);
        writeData(data);
        res.status(201).json({message:"User registered successfully", user:newUser});
    }catch(error){
        res.status(500).json({error:error.message});
    }
});
export default router;