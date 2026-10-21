const express= require("express");

const app = express();

app.use("/test",(req,res)=>{
        res.send("Hello from the Server ")  // Request Handler 
})

app.use ("/home",(req,res)=>{
    res.send("This is an another Response handler ");
})

app.use("/inbox",(req,res)=>{
    res.send("This is an Inbox Ones ");
})

app.use ("/exit",(req,res)=>{
    res.send("This is an Exit API ")
})

app.use ("/final",(req,res)=>{
    res.send("Namste From Final ")
})

app.use("/ser",(req,res)=>{
    res.send("This is an Ser API ")
})
app.listen(7777 , ()=>{
    console.log("Server is Succesfully Listenig on Port 7777 ")
})