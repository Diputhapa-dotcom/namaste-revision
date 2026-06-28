const jwt = require("jsonwebtoken")
require
exports.authentication = async (req,res,next)=>{
    const token = req.cookies.token;
    if(!token||token===null||token===undefined){
        return res.send("please login first")
    }
    const verified =await promisify(jwt.verify)(token,process.env.tokenPass);


}