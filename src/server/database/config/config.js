<<<<<<< HEAD
module.exports = {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: "mercadolibros",
    host: "127.0.0.1",
    dialect: "mysql",
=======
module.exports={
  "development": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PASSWORD || "",
    "database": "mercadolibros",
    "host": "127.0.0.1",
    "dialect": "mysql"
>>>>>>> 2ed6227322c1082b3bae330853198ae60eb14fe2
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
