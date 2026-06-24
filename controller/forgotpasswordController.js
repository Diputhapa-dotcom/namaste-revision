exports.forgotpasswordGet = (req,res)=>{
    const error = req.flash("error");
    res.render("forgotpassword.ejs",{error:error});
}
exports.forgotpasswordPost = (req,res)=>{
    const {email} =req.body;
    if(!email){
        req.flash("error","Please Enter Email");
        res.redirect("/forgotpassword");
    }
    sendMsg()
}