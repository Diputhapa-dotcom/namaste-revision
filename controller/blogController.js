const { where } = require("sequelize");
const { blogs } = require("../model");

exports.blogPost =async (req,res)=>{
    const id = req.registerId;
    
    const {title,subtitle,description,file} = req.body;
    await blogs.create({
        title,
        subtitle,
        description,
        image:file
    })
}
exports.editBlog = async (req,res)=>{
  const {title,subtitle,desription,file} = req.body;
  await blogs.update({


    },{
        where:{
            id:id
         
    }
})
}
