const express = require("express");
const mongoose = require ("mongoose");
const app= express();

app.use(express.urlencoded({extended:true}));

mongoose.connect("mogodb://localhost:27017/keeperDB");


const userSchema= new mongoose.Schema({
    userEmail: String,
    userPass: String,
    userFullName: String
})

const User = mongoose.model("User",userSchema);

app.post("/register",(req,res)=>{
    const userFullName = req.body.registerFullName;
    const userEmail=req.body.registerEmail;
    const userPassword=req.body.registerPassword;
    const newUser = new User({
        userEmail: userEmail,
        userPass: userPassword,
        userFullName: userFullName
    })
    newUser.save((err)=>{
        if (!err) {
            res.redirect("/")
        }else{
            console.log(err);
        }
    });
})


app.listen(3000,()=> {
    console.log("started successfully");
})