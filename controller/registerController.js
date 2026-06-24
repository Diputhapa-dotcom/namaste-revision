const { registers } = require("../model");
const bcrypt = require("bcrypt");

exports.registerGet = (req,res)=>{
    const error = req.flash("error");
    res.render("register.ejs",{error:error});

}

exports.registerPost = async (req,res)=>{
const{username,email,password} = req.body;
if(!username || !email || !password){
    return res.send("please priovide the given data");
}
const register = await registers.findAll({
    where:{
        email:email
    }
})
    if(register.length>0){
    req.flash("error","Already Registered");
    res.redirect("/register");
}

console.log(username)
await registers.create({
    username:username,
    email:email,
    password: bcrypt.hashSync(password,10)
});
res.send("data sended succesfully");
};