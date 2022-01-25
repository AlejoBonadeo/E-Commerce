module.exports = (sequelize, dataTypes) => {
  let alias = "Publicacion";
  let columnas = {
    titulo: {
      type: dataTypes.STRING(100),
    },
    detalle: {
      type: dataTypes.STRING(500),
    },
    estado_libro: {
      type: dataTypes.CHAR,
    },
    precio: {
      type: dataTypes.FLOAT,
    },
  
    status: {
      type: dataTypes.SMALLINT,
    },
    foto: {
      type: dataTypes.STRING(100),
    },
    id_libro: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    id_usuario: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
  };
  let config = {
    tableName: "Publicaciones",
    timestamps: false,
  };
  const Publicacion = sequelize.define(alias, columnas, config);

  Publicacion.associate = function (models) {
    Publicacion.belongsTo(models.Libro, {
      as: "libro",
      foreignKey: "id_libro",
    });
    Publicacion.belongsTo(models.Usuario, {
      as: "usuario",
      foreignKey: "id_usuario",
    });
    Publicacion.hasMany(models.FotoPublicacion, {
      as: "fotos",
      foreignKey: "id_publicacion",
    });
    Publicacion.hasOne(models.CarritoDetalle, {
      foreignKey: "id_publicacion",
    });
  };

  return Publicacion;
};
