module.exports = (sequelize, define) => {
    let alias = 'Categorias'
    let columnas ={
        id:{
            dataTypes: INTEGER,
            primaryKey:true
        },
        categoria:{
            dataTypes: VARCHAR(50)
        }
    }
    let config ={
        tableName: 'Categorias',
        timeStamps: false
    }
    
    const Categoria = sequelize.define(alias, columnas, config);

    Categoria.associate = function(models){
        Categoria.hasMany(models.Libro, {
            as:'Libros',
            foreignKey:'id_categoria'
        })
    };

    return Categoria;
}