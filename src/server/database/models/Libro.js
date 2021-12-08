module.exports = (sequelize, dataTypes) => {
    let alias = 'Libros';
    let columnas = {
        id:{
            type: dataTypes.INTEGER,
             primaryKey: true
        },
        titulo:{
            type: dataTypes.STRING(100)
        },
        isbn:{
            type: dataTypes.INTEGER,
        },
        edicion:{
            type: dataTypes.INTEGER,
        },
        fecha_edicion:{
            type: dataTypes.DATE
        },
        id_editorial:{
            type: dataTypes.INTEGER,
            foreignKey: true
        },
        id_categoria:{
            type: dataTypes.INTEGER,
            foreignKey: true
        },
        status:{
            type: dataTypes.INTEGER,
        }

    }
    let config = {
        tableName: 'Libros',
        timeStamps: false
    }
    const Libro = sequelize.define(alias, columnas, config);

    Libro.associate = function(models){
        Libro.belongsTo(models.Categoria, {
            as: 'Categorias',
            foreignKey: 'id_categoria'
        })
    };

    Libro.associate = function(models){
        Libro.belongsTo(models.Editorial, {
            as: 'Editoriales',
            foreignKey: 'id_editorial'
        })
    };

    Libro.associate = function(models){
        Libro.hasMany(models.Autor, {
            as: 'Autores',
            foreignKey: 'id_autor'
        })
    };

     Libro.associate = function(models){
        Libro.belongsToMany(models.Libros_Autores, {
            as:'autores',
            through:'libros_utores',
            foreignKey:'id_libro',
            otherKey:'id_autor',
            timeStamps: false
        })
    };

    return Libro;
};