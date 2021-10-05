const path = require("path");
const views = path.join(__dirname, "../../web/views");
const data = require("../data");

const userController = {
  register: (req, res) => {
    res.render(path.join(views, "/user/register"));
  },
  login: (req, res) => {
    res.render(path.join(views, "/user/login"));
  },
};

module.exports = userController;
