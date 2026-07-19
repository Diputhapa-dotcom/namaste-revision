const { registers } = require("../model");
const bcrypt = require("bcrypt");


exports.registerPost = async (req,res)=>{
    const{username,email,password}= req.body;
    if(!username || !email || !password ){
    res.json({
      message:"Please enter the given input"
    })
    }
  
    const data = await registers.findAll({
        where:{
            email:email,
        }
    })
  if(data.length>0){
    return res.json({
      message:"Already registered"
     })
  }
  await registers.create({
    username:username,
    email:email,
    password: bcrypt.hashSync(password,10)
  })
  res.json({
    message:"registered successfully",
    status:200
  })
}