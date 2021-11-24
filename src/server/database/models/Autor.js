module.exports = (sequelize, define) => {
    let alias = 'Autores'
    let columnas ={
        id:{
            dataTypes: INTEGER,
            primaryKey:true
        },
        nombre:{
            dataTypes: VARCHAR(100) 
        },
        apellido:{
            dataTypes: VARCHAR(100)
        },
        status:{
            dataTypes: SMALLINT
        }
    }
    let config ={
        tableName: 'Autores',
        timeStamps: false
    }
    
    
    
    const Autor = sequelize.define(alias, columnas, config);
    return Autor;
}