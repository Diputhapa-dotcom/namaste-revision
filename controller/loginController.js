const { where } = require("sequelize");
const { registers } = require("../model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

exports.loginGet = (req,res)=>{
    const error = req.flash("error");
    res.render("login.ejs",{error});
}
exports.loginPost = async (req,res)=>{
    const {email,password} = req.body;
  
    if(!email||!password){
          req.flash("error","Please fill the given requirement");
     return res.redirect("/login");
    }
    const data = await registers.findAll({
        where:{
            email:email,
        }
    })
 if(data.length===0){
  req.flash("error","No email with that user");
     return res.redirect("/login");
 }
 const isPassword = bcrypt.compareSync(password,data[0].password);
 if(!isPassword){
      req.flash("error","Incorrect password");
     return res.redirect("/login");
 }
const token = jwt.sign({id:data[0].id},"password",{expiresIn:"1d"})
 res.cookie("token",token)
 res.send("succesfull");
}





