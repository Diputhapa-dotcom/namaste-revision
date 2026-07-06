const jwt = require("jsonwebtoken");

const promisify = require("util").promisify;



exports.isAuthentication = async (req,res,next)=>{

const token = req.cookies.token;
console.log(token)

if(!token || token==null ||token==undefined){
    return res.send("please login first");
}
const verify = await promisify(jwt.verify)(token,"password");
req.userid = verify.id;
next()

}