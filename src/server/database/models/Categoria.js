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
    return Categoria;
}