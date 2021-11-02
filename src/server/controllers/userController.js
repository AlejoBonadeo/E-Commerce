const { hashSync, genSaltSync } = require("bcryptjs");
const fs = require('fs');
const path = require("path");

const usersFilePath = path.resolve(__dirname, "../data/Users.json");

const userController = {
  register: (req, res) => {
    res.render("./user/register");
  },
  login: (req, res) => {
    res.render("./user/login");
  },
  newAccount: (req, res) => {
    //TODO agregar multer
    let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"))
    const { body } = req

    if( body.passUsuario !== body.repeatpassUsuario ) {
      return res.render('./user/register', { error: 'Ambas contraseñas deben ser iguales'})
    }
    for(user of users) {
      if( user.emailUsuario === body.emailUsuario ) {
        return res.render('./user/register', { error: 'El email ya esta registrado'})
      }
    }

    const salt = genSaltSync()
    body.passUsuario = hashSync( body.passUsuario, salt )

    delete body.aceptaTerminos
    delete body.repeatpassUsuario

    users = [...users, {
      idUsuario: new Date().getTime(),
      ...body
    }]
    
    fs.writeFileSync(
      usersFilePath,
      JSON.stringify( users, null, 3 )
    )

    res.redirect('/')
  }
};

module.exports = userController;
