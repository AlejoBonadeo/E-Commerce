const fs = require("fs");
const path = require("path");
const usersFilePath = path.resolve(__dirname, "../data/Users.json");

let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

module.exports = function(req, res, next){
  if(req.cookies.savedUserCookie != undefined && req.session.authUser == undefined){
      let loggedUser = users.find((usr) => {
          if (usr.emailUsuario == req.cookies.savedUserCookie.emailUsuario && usr.passUsuario == req.cookies.savedUserCookie.passUsuario) {
            return usr;
          }
        });

      if (loggedUser != undefined){
          req.session.authUser = loggedUser;
      }        
  }
  next();
}