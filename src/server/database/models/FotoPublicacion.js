module.exports = (sequelize, dataTypes) => {
  let alias = "FotoPublicacion";
  let columnas = {
    filename: {
      type: dataTypes.STRING(20),
    },
    path: {
      type: dataTypes.STRING(100),
    },
    id_publicacion: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    status: {
      type: dataTypes.SMALLINT,
    },
  };
  let config = {
    tableName: "Foto_Publicaciones",
    timestamps: false,
  };
  const FotoPublicacion = sequelize.define(alias, columnas, config);

  FotoPublicacion.associate = function (models) {
    FotoPublicacion.belongsTo(models.Publicacion, {
      as: "publicacion",
      foreignKey: "id_publicacion",
    });
  };

  return FotoPublicacion;
};
