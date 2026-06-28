const flash = require("express-flash");
const { registers } = require("../model");

exports.otpGet =(req,res)=>{

const {email} = req.query;
    const error = req.flash("error");
    res.render("otpVerification.ejs",{error:error,email:email})
}
exports.otpPost =async (req,res)=>{
    console.log(req.params)
    const {otp} = req.body;
    console.log(otp)
    if(!otp){
        req.flash("error","please enter otp");
        return res.redirect("/otpverification");
    }
   const otpCheck = await registers.findAll({
        where:{
            otp:otp
        }
    });
   if(otpCheck.length===0){
    req.flash("error","Wrong opt");
   return res.redirect("/otpverification")
   }
   const forgototpTime =  otpCheck[0].verifyTime
   const verifyotpTime = Date.now();
   const totalotpTime = verifyotpTime - forgototpTime;
   console.log(totalotpTime);
   if(totalotpTime>=120000){
    req.flash("error","Your otp has expired");
    return res.redirect("/otpverification");
   }

   res.send("successful");  
}