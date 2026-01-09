import express from 'express'
const app=express()
app.get("/home",(req,res)=>{
    res.send("This is Home Page")
})
app.get("/contactus",(req,res)=>{
    res.send("Contact us at contact@contact.com")
})
app.get("/about",(req,res)=>{
    res.send("Welcome to the About Page!")
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:3000")
})