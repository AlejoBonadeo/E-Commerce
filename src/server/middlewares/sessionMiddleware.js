const { Op } = require("sequelize");
const db = require("../database/models");

module.exports = function (req, res, next) {
  if (req.cookies.savedUserCookie != undefined && req.session.authUser == undefined) {
    db.Usuario.findOne({
      where: {
        [Op.and]: [{ email: req.cookies.savedUserCookie.emailUsuario }, { password: cookies.savedUserCookie.passUsuario }],
      },
    })
      .then((usr) => {
        if (usr != null) {
          req.session.authUser = usr;
          console.log("Se creo session desde local cookie -> " + loggedUser.emailUsuario);
        }
      })
      .catch((e) => console.log(e));
  }
  next();
};
