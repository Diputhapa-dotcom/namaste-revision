const { registers } = require("../model");
const bcrypt = require("bcrypt");

exports.registerGet = (req,res)=>{
    res.render("register.ejs");
}
exports.registerPost = async (req,res)=>{
const{username,email,password} = req.body;
console.log(username)
await registers.create({
    username:username,
    email:email,
    password: bcrypt.hashSync(password,10)
});
res.send("data sended succesfully");
};