const { where } = require("sequelize");
const { registers } = require("../model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


exports.loginPost = async (req,res)=>{
    const {email,password} = req.body;
  
    if(!email||!password){
     return res.status(400).json({
        message:"please provide email and password first"
     })
    }
    const data = await registers.findAll({
        where:{
            email:email,
        }
    })
 if(data.length===0){
 return res.json({
    message:"no user with that email"
 })
 }
 const isPassword = bcrypt.compareSync(password,data[0].password);
 if(!isPassword){
   return res.json({
        message:"invalid password"
    })
 }
const token = jwt.sign({id:data[0].id},"password",{expiresIn:"1d"})
res.json({
    message:"loggedin Successfully",
    token:token
})
}





