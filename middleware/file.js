const multer = require("multer")
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./files");
    },
    filename:function(req,file,cb){
        cb(null,Date.now() + "-" + file.originalname);
    }
});



const image = multer({storage:storage});
module.exports = image

