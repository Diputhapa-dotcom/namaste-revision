const { logins, comments } = require("../model");

exports.commentGet = (req,res)=>{
  const {email} = req.query;
 
    res.render("comment.ejs",{email:email})
}

exports.commentPost =async (req,res)=>{
   const userid =  req.userid;
  

   const {message}=  req.body;
  await comments.create({
    message,
    loginId:userid

   })
res.redirect("/comment");
}