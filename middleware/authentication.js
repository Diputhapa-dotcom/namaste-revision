const jwt = require("jsonwebtoken")
const promisify = require("util").promisify;
exports.authentication = async (req,res,next)=>{
    const token = req.cookies.token;
    if(!token||token===null||token===undefined){
        return res.send("please login first")
    }
    const verified =await promisify(jwt.verify)(token,process.env.tokenPass); //error throw garxa false haina so check garna pardena
    next()


}