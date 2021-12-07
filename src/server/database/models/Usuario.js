module.exports = (sequelize, dataTypes) => {

    let alias = 'Usuarios';
    let columnas = {

        id:{
             type: dataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true
        },
        tipo:{
            type: dataTypes.STRING(1)
        },
        nombre:{
            type: dataTypes.STRING(100)
        },
        apellido:{
            type: dataTypes.STRING(100)
        },
        email:{
            type: dataTypes.STRING(100)
        },
        password:{
            type: dataTypes.STRING(100)
        },
        dni:{
            type: dataTypes.INTEGER
        },
        direccion:{
            type: dataTypes.STRING(100)
        },
        localidad:{
            type: dataTypes.STRING(100)
        },
        provincia:{
            type: dataTypes.STRING(100)
        },
        pais:{
            type: dataTypes.STRING(100)
        },
        telefono:{
            type: dataTypes.INTEGER
        },
        img_url:{
            type: dataTypes.STRING(100)
        },
        status:{
            type: dataTypes.SMALLINT
        }

    }
    let config = {
        tableName: 'Usuarios',
        timestamps: false
    }
    const Usuario = sequelize.define("Usuarios", columnas, config);
    return Usuario;
};