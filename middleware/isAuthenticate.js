const jwt = require("jsonwebtoken");
const promisify = require("util").promisify;

exports.isAuthenticate = (req,res,next)=>{
const token = req.cookies.token;
if(!token||token===null||token===undefined){
    return res.json({
        message:"login first"
    })
   const verify = promisify(jwt.verify)(token,process.env.tokenpass)
    req.registerId = verify.id
    next()
}
}