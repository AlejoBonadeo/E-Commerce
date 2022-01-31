module.exports = {
  development: {
  /*
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: "mercado_libros2",
    host: "127.0.0.1",
    dialect: "mysql"
   */
   
    username: /* process.env.DB_USER ||  */"difermo_grupo11Admin",
    password: /* process.env.DB_PASSWORD || */ "Grupo11Admin2022",
    database: "difermo_mercado_libros2",
    host: "difermo.com.ar",
    dialect: "mysql"
  
  },

  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
};
