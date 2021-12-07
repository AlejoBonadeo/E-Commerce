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
    return Categoria;
}