module.exports = (sequelize, define) => {
    let alias = 'Usuarios';
    let columnas = {
        id:{
             type: INTEGER,
             primaryKey: true
        },
        tipo:{
            dataTypes: VARCHAR(1)
        },
        nombre:{
            dataTypes: VARCHAR(100)
        },
        apellido:{
            dataTypes: VARCHAR(100)
        },
        email:{
            dataTypes: VARCHAR(100)
        },
        password:{
            dataTypes: VARCHAR(100)
        },
        dni:{
            dataTypes: INTEGER
        },
        direccion:{
            dataTypes: VARCHAR(100)
        },
        localidad:{
            dataTypes: VARCHAR(100)
        },
        provincia:{
            dataTypes: VARCHAR(100)
        },
        pais:{
            dataTypes: VARCHAR(100)
        },
        telefono:{
            dataTypes: INTEGER
        },
        img_url:{
            dataTypes: VARCHAR(100)
        },
        status:{
            dataTypes: SMALLINT
        }

    }
    let config = {
        tableName: 'Usuarios',
        timeStamps: false
    }
    const Usuario = sequelize.define("Usuarios", columnas, config);
    return Usuario;
};