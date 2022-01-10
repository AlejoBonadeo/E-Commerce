const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../web/public/img/user_img"));
  },
  filename: (req, file, cb) => {
    const newFileName = "user-" + new Date().getTime() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

module.exports = multer({ storage });

