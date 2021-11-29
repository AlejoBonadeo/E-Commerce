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

    Libros_Autores.associate = function(models){
        Libros_Autores.hasMany(models.Libro, {
            as:'Libros',
            foreignKey:'id_Libro'
        })
    };

    return Libros_Autores;
}