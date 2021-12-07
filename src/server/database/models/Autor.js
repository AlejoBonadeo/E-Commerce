module.exports = (sequelize, dataTypes) => {
    let alias = 'Autores'
    let columnas ={
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true
        },
        nombre:{
            type: dataTypes.STRING(100) 
        },
        apellido:{
            type: dataTypes.STRING(100)
        },
        status:{
            type: dataTypes.INTEGER
        }
    }
    let config ={
        tableName: 'Autores',
        timeStamps: false
    }
        
    const Autor = sequelize.define(alias, columnas, config);
    return Autor;
}