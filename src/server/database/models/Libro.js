module.exports = (sequelize, define) => {
    let alias = 'Libros';
    let columnas = {
        id:{
             type: INTEGER,
             primaryKey: true
        },
        titulo:{
            dataTypes: VARCHAR(100)
        },
        isbn:{
            dataTypes: INTEGER
        },
        edicion:{
            dataTypes: SMALLINT
        },
        fecha_edicion:{
            dataTypes: DATE
        },
        id_editorial:{
            dataTypes:INTEGER,
            foreignKey: true
        },
        id_categoria:{
            dataTypes: INTEGER,
            foreignKey: true
        },
        status:{
            dataTypes: SMALLINT
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

    return Libro;
};