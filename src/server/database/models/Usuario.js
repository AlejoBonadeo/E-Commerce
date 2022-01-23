module.exports = (sequelize, dataTypes) => {
  let alias = "Usuario";
  let columnas = {
    nombre: {
      type: dataTypes.STRING(100),
    },
    apellido: {
      type: dataTypes.STRING(100),
    },
    email: {
      type: dataTypes.STRING(100),
    },
    password: {
      type: dataTypes.STRING(100),
    },
    dni: {
      type: dataTypes.INTEGER,
    },
    direccion: {
      type: dataTypes.STRING(100),
    },
    localidad: {
      type: dataTypes.STRING(100),
    },
    provincia: {
      type: dataTypes.STRING(100),
    },
    pais: {
      type: dataTypes.STRING(100),
    },
    telefono: {
      type: dataTypes.INTEGER,
    },
    foto: {
      type: dataTypes.STRING(100),
    },
    status: {
      type: dataTypes.SMALLINT,
    },
  };
  let config = {
    tableName: "Usuarios",
    timestamps: false,
  };
  const Usuario = sequelize.define(alias, columnas, config);

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Publicacion, {
      as: "publicaciones",
      foreignKey: "id_usuario",
    });

    Usuario.hasMany(models.Carrito, {
      as: "carritos",
      foreignKey: "id_usuario",
    });
  };
  return Usuario;
};
