const express = require("express");
const { registerGet, registerPost } = require("./controller/registerController");
const app =express();
const session = require("express-session");
const flash = require("express-flash");
const { loginGet, loginPost } = require("./controller/loginController");
const { forgotpasswordGet, forgotpasswordPost } = require("./controller/forgotpasswordController");




app.set("view engine","ejs");
require("./model");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret:"password",
    resave:false,
    saveUninitialized:false

}));
app.use(flash())



app.get("/register",registerGet);
app.post("/register",registerPost);
app.get("/login",loginGet);
app.post("/login",loginPost);
app.get("/forgotpassword",forgotpasswordGet);
app.post("/forgotpassword",forgotpasswordPost);







const port=3000;
app.listen(port,()=>{
console.log("The project has started at port",port);
})