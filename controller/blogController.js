const { where } = require("sequelize");
const { blogs } = require("../model");

exports.blogPost =async (req,res)=>{
    const id = req.registerId;
   
    //frontend bata aako data lai database ma store gareko
    const {title,subtitle,description,files} = req.body;
    await blogs.create({
        title,
        subtitle,
        description,
        image:files,
        registerId:id
    })
    res.json({
        message:"ok"
    })
}




//data database bata fetch garera frontend lai pthako
exports.addGet = async (req,res)=>{
const data = await blogs.findAll()
res.status(200).json({
    success:true,
    data:data
})
}




exports.editBlog =async ()=>{
     const id = req.registerId;
    const {title,subtitle,description,files} = req.body;
   await blogs.update({
    title,
    subtitle,
    description,
    image:files
    },{
        where:{
            id:id
        }
    })
}