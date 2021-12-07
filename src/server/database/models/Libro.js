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
    return Libro;
};