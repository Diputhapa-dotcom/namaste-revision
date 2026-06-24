const express = require("express");
const { registerGet, registerPost } = require("./controller/registerController");
const app =express();


app.set("view engine","ejs");
require("./model");
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/register",registerGet);
app.post("/register",registerPost);







const port=3000;
app.listen(port,()=>{
console.log("The project has started at port",port);
})