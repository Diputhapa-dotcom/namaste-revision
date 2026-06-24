const { registers } = require("../model");
const bcrypt = require("bcrypt")

exports.loginGet=(req,res)=>{
    const error = req.flash("error");
    res.render("login.ejs",{error});
}
exports.loginPost = async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.send("please provide email and password");
    }
    const registered = await registers.findAll({
        where:{
            email:email
        }
    });
  if(registered.length===0){
    req.flash("error","Invalid Email");
    res.redirect("/login");
  }
  const isPassword = bcrypt.compareSync(password,registered[0].password);
  if(isPassword){
    res.send("logged in successfully");
  }else{
     req.flash("error","Invalid Password");
     res.redirect("/login");
  } 
    console.log(email)
    res.send("login succesfully");
}