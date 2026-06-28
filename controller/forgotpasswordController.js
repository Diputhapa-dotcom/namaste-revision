const { where } = require("sequelize");
const sendMsg = require("../function/otpSend");
const { registers } = require("../model");
exports.forgotpasswordGet = (req,res)=>{
    const error = req.flash("error");
    res.render("forgotpassword.ejs",{error:error});
}


exports.forgotpasswordPost = async(req,res)=>{
    const {email} =req.body;
    if(!email) {
        return res.send("please enter email");
    }
    const data =  await registers.findAll({
        where:{
            email:email

        }
    })
    data[0].verifyTime = Date.now();
    await data[0].save();

        sendMsg(email);
        res.redirect("/otpverification?email=" + email);
    
}