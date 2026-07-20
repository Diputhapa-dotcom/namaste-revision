const jwt = require("jsonwebtoken");
const promisify = require("util").promisify;

exports.isAuthenticate =async (req,res,next)=>{
const token = req.headers.authorization;
console.log(token)
if(!token||token===null||token===undefined){
    return res.json({
        message:"login first"
    })
}
const verify = await promisify(jwt.verify)(token,process.env.tokenpass)
req.registerId = verify.id
next()
}