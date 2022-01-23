const multer = require("multer");
const path = require("path");
  
module.exports = multer({ 
  storage : multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../../web/public/img/publicacion_img"));
    },
    filename: (req, file, cb) => {
      const newFileName = "book-" + new Date().getTime() + path.extname(file.originalname);
      cb(null, newFileName);
    },
  })
  ,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Solamente formatos .png, .jpg and .jpeg son permitidos'));
    }
  }
});