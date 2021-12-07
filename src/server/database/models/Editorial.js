module.exports = (sequelize, dataTypes) => {
    let alias = 'Editoriales'
    let columnas ={
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true
        },
        nombre:{
            type: dataTypes.STRING(100)
        },
        direccion:{
            type: dataTypes.STRING(100)
        },
        telefono:{
            type: dataTypes.INTEGER,
        },
        status:{
            type: dataTypes.INTEGER,
        }
    }
    let config ={
        tableName: 'Editoriales',
        timeStamps: false
    }
    
    
    
    const Editorial = sequelize.define(alias, columnas, config);
    return Editorial;
}