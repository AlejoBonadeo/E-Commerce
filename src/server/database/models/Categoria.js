module.exports = (sequelize, dataTypes) => {
  let alias = "Categoria";

  let columnas = {
    categoria: {
      type: dataTypes.STRING(50),
    },
  };

  let config = {
    tableName: "Categorias",
    timestamps: false,
  };

  const Categoria = sequelize.define(alias, columnas, config);

  Categoria.associate = function (models) {
    Categoria.hasMany(models.Libro, {
      as: "libros",
      foreignKey: "id_categoria",
    });
  };

  return Categoria;
};
