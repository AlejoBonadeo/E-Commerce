module.exports = (sequelize, dataTypes) => {
  let alias = "Libro";
  let columnas = {
    titulo: {
      type: dataTypes.STRING(100),
    },
    isbn: {
      type: dataTypes.INTEGER,
    },
    edicion: {
      type: dataTypes.SMALLINT,
    },
    fecha_edicion: {
      type: dataTypes.DATE,
    },
    id_editorial: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    id_categoria: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    status: {
      type: dataTypes.SMALLINT,
    },
  };
  let config = {
    tableName: "Libros",
    timestamps: false,
  };
  const Libro = sequelize.define(alias, columnas, config);

  Libro.associate = function (models) {
    Libro.belongsTo(models.Editorial, {
      as: "editorial",
      foreignKey: "id_editorial",
    });
    Libro.belongsTo(models.Categoria, {
      as: "categoria",
      foreignKey: "id_categoria",
    });
    Libro.belongsToMany(models.Autor, {
      as: "autores",
      through: "libros_autores",
      foreignKey: "id_libro",
      otherKey: "id_autor",
      timestamps: false,
    });
  };

  return Libro;
};
