module.exports = (sequelize, dataTypes) => {
  let alias = "Carrito";
  let columnas = {
    fecha: {
      type: dataTypes.DATE,
    },
    id_usuario: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
  };
  let config = {
    tableName: "Carrito",
    timestamps: false,
  };
  const Carrito = sequelize.define(alias, columnas, config);

  Carrito.associate = function (models) {
    Carrito.belongsTo(models.Usuario, {
      as: "usuario",
      foreignKey: "id_usuario",
    });
    Carrito.hasMany(models.CarritoDetalle, {
      as: "carritoDetalle",
      foreignKey: "id_carrito",
    });
  };
  return Carrito;
};
