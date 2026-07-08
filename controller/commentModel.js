const { logins, comments } = require("../model");

exports.commentGet =async (req,res)=>{
  const {email} = req.query;
  const userid =  req.userid;
   const user = await comments.findByPk(userid)
   console.log(user)
 
    res.render("comment.ejs",{email:email,user})
}

exports.commentPost =async (req,res)=>{
  
console.log(userid)
   const {message}=  req.body;
  await comments.create({
    message


   })
res.redirect("/comment");
}