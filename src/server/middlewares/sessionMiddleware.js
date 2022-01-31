const { Op } = require("sequelize");
const db = require("../database/models");

module.exports = function (req, res, next) {
  if (req.cookies.savedUserCookie != undefined && req.session.authUser == undefined) {
    console.log(req.session.authUser);
    db.Usuario.findOne({
      where: {
        email: req.cookies.savedUserCookie.email,
        status: 1
      },
    })
      .then((usr) => {
        console.log(usr);
        if (usr != null && usr.password == req.cookies.savedUserCookie.password) {
          req.session.authUser = usr;
          next();
        }
      })
      .catch((e) => console.log(e));
  } else {
    next();
  }
};
