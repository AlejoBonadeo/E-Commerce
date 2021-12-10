module.exports = (sequelize, dataTypes) => {
  let alias = "Editorial";
  let columnas = {
    nombre: {
      type: dataTypes.STRING(100),
    },
    direccion: {
      type: dataTypes.STRING(100),
    },
    telefono: {
      type: dataTypes.INTEGER,
    },
    status: {
      type: dataTypes.SMALLINT,
    },
  };
  let config = {
    tableName: "Editoriales",
    timestamps: false,
  };

  const Editorial = sequelize.define(alias, columnas, config);

  Editorial.associate = function (models) {
    Editorial.hasMany(models.Libro, {
      as: "libros",
      foreignKey: "id_editorial",
    });
  };

  return Editorial;
};
