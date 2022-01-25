module.exports = (sequelize, dataTypes) => {
    let alias = "Libro_Autor";
    let columnas = {
      id_libro: {
        type: dataTypes.INTEGER,
      },
      id_autor: {
        type: dataTypes.INTEGER,
      },
    };
    let config = {
      tableName: "libros_autores",
      timestamps: false,
    };
  
    const Libro_Autor = sequelize.define(alias, columnas, config);
  
    Libro_Autor.associate = function (models) {
        Libro_Autor.belongsTo(models.Libro ,{
            as: "libroAutor",
            foreignKey: "id_libro"
        }),
        Libro_Autor.belongsTo(models.Autor ,{
            as: "AutorLibro",
            foreignKey: "id_autor"
        })
    };
  
    return Libro_Autor;
  };
  