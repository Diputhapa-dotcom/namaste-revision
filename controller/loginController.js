const { where } = require("sequelize");
const { logins, comments } = require("../model");
const jwt = require("jsonwebtoken");






exports.loginGet = (req,res)=>{
    logins.findAll({
        
    })
    res.render("login.ejs")
}


exports.loginPost = async (req,res)=>{
const {email,password} = req.body;
const user = await logins.findOne({
    where:{
        email,
    }
})
if(user){
    return res.send("already");
}
const data = await logins.create({
    email,
    password
});

const token = jwt.sign({id:data.id},"password",{expiresIn:"1d"});
res.cookie("token",token);
res.redirect(`/comment?email-${email}`);
}