module.exports = (sequelize, dataTypes) => {
  let alias = "Autor";
  let columnas = {
    nombre: {
      type: dataTypes.STRING(100),
    },
    apellido: {
      type: dataTypes.STRING(100),
    },
    status: {
      type: dataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "Autores",
    timestamps: false,
  };

  const Autor = sequelize.define(alias, columnas, config);

  Autor.associate = function (models) {
    Autor.belongsToMany(models.Libro, {
      as: "libros",
      through: "libros_autores",
      foreignKey: "id_autor",
      otherKey: "id_libro",
      timestamps: false,
    });
  };

  return Autor;
};
