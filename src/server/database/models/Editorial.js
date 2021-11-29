module.exports = (sequelize, define) => {
    let alias = 'Editoriales'
    let columnas ={
        id:{
            dataTypes: INTEGER,
            primaryKey:true
        },
        nombre:{
            dataTypes: VARCHAR(100)
        },
        direccion:{
            dataTypes: VARCHAR(100)
        },
        telefono:{
            dataTypes: INTEGER
        },
        status:{
            dataTypes: SMALLINT
        }
    }
    let config ={
        tableName: 'Editoriales',
        timeStamps: false
    }
    
    const Editorial = sequelize.define(alias, columnas, config);
    
    Editorial.associate = function(models){
        Editorial.hasMany(models.Libro, {
            as:'Libros',
            foreignKey:'id_editorial'
        })
    };
    
    return Editorial;
}