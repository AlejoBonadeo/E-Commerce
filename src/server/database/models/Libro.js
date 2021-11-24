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
    return Libro;
};