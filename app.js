const express = require("express");
const { loginGet, loginPost } = require("./controller/loginController");
const { commentGet, commentPost } = require("./controller/commentModel");
const app = express();
require("./model")
const cookieParser = require("cookie-parser");
const { isAuthentication } = require("./middleware/isAuthentication");





app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())








app.get("/login",loginGet);
app.post("/login",loginPost);
app.get("/comment",isAuthentication,commentGet);
app.post("/comment",commentPost);



















const port = 3000;
app.listen(port,()=>{
    console.log("The port has started at",port)
})