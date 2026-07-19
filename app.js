const express = require("express");
const { registerPost } = require("./controller/registerController");
const cors = require("cors")
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const { loginPost } = require("./controller/loginController");
const { blogPost } = require("./controller/blogController");
const { isAuthenticate } = require("./middleware/isAuthenticate");
const multer = require("multer");
const { storage } = require("./middleware/file");



app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.static("./public"))
require("./model");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:"password",
    resave:false,
    saveUninitialized:false
}));
app.use(flash());
const file = multer({storage:storage});






app.post("/register",registerPost);
app.post("/login",loginPost);
app.post("/blog ",isAuthenticate,file.single("file"),blogPost);
















const port = 3000;
app.listen(port,()=>{
    console.log("The port has started at",port)
});