const nodemailer = require("nodemailer");
const { registers } = require("../model");
async function sendMsg(email){

   const transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.email,
            pass:process.env.password,
        }
    })
    const otp = Math.floor(1000 + Math.random()*9999);
    console.log(otp)
   const user = await registers.findAll({
        where:{
            email:email
        }
    })
    console.log(user)

user[0].otp = otp;
await user[0].save();

    await transport.sendMail({
        from:process.env.email,
        to:email,
        subject:"Forgot Password",
        text:"your otp code is" + otp
    })

}
module.exports = sendMsg;