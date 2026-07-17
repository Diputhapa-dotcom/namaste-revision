const { registers } = require("../model");
const bcrypt = require("bcrypt");


exports.registerGet = (req,res)=>{
    const error= req.flash("error")
    res.render("register.ejs",{error});
}
exports.registerPost = async (req,res)=>{
    const{username,email,password,confirmPassword}= req.body;
    if(!username || !email || !password ||!confirmPassword){
      req.flash("error","Please fill the given requirement");
     return res.redirect("/register");
    }
    if(password!==confirmPassword){
         req.flash("error","Password must be same");
     return res.redirect("/register");
    }
    const data = await registers.findAll({
        where:{
            email:email,
        }
    })
  if(data.length>0){
      req.flash("error","Email is already registered");
     return res.redirect("/register");
  }
  await registers.create({
    username:username,
    email:email,
    password: bcrypt.hashSync(password,10)
  })
  res.json({
    message:"registered successfully",
    status:201
  })
}