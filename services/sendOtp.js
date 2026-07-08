const nodemailer = require("nodemailer");
async function sendMail(email){
   const transport =  nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"diputhapa@gmail.com",
            pass:"password"
        }
        
    })
    await transport.sendMail({
        from:"magardeepu thapa",
        to:"hello world",
        subject:"otp verification",
        text:"your otp code is 1234" 
    })
    

}
module.exports = sendmail: