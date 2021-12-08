module.exports = (sequelize, dataTypes) => {
    let alias = 'Categorias'

    let columnas ={
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true
        },
        categoria:{
            type: dataTypes.STRING(50)
        }
    }

    let config ={
        tableName: 'Categorias',
        timeStamps: false
    }
    
   const Categoria = sequelize.define(alias, columnas, config);

    Categoria.associate = function(models){
        Categoria.hasMany(models.Libros, {
            as:'Libros',
            foreignKey:'id_categoria'
        })
    };

    return Categoria;
}