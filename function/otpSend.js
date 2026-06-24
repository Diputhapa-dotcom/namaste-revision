const nodemailer = require("nodemailer");
async function sendMsg(){

   const transport = nodemailer.createTransport({
        mailer:"email",
        auth:{
            user:process.env.email,
            pass:process.env.password,
        }
    })
    await transport.sendMail({
        from:process.env.email,
        to:email,
        subject:"Forgot Password",
        text:"your otp code is 12232"
    })

}