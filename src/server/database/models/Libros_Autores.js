module.exports = (sequelize, define) =>{
    let alias = 'Libros_Autores';
    let columnas ={
        id:{
            dataTypes: INTEGER,
            primaryKey: true
        },
        id_libro:{
            dataTypes: INTEGER,
            foreignKey: true
        },
        id_autor:{
            dataTypes: INTEGER,
            foreignKey: true
        }
    }
    let config = {
        tableName: 'Libros_Autores',
        timeStamps: false
    }
    const Libros_Autores = sequelize.define(alias, columnas, config);

    return Libros_Autores;
}