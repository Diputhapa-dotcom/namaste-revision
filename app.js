require("dotenv").config();
const express = require("express");
const { registerPost } = require("./controller/registerController");
const cors = require("cors");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const { loginPost } = require("./controller/loginController");
const { blogPost, addGet, editBlog } = require("./controller/blogController");
const image = require("./middleware/file");
const { isAuthenticate } = require("./middleware/isAuthenticate");
const cookieParser = require("cookie-parser");





app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
require("./model");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(session({
    secret:"password",
    resave:false,
    saveUninitialized:false
}));
app.use(flash());






app.post("/register",registerPost);
app.post("/login",loginPost);
app.post("/blog",isAuthenticate,image.single("files"),blogPost);
app.post("/blog/edit",isAuthenticate,image.single("files"),editBlog);
app.get("/fetch",addGet);
















const port = 3000;
app.listen(port,()=>{
    console.log("The port has started at",port)
});