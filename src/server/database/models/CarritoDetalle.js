module.exports = (sequelize, dataTypes) => {
  let alias = "CarritoDetalle";
  let columnas = {
    id_carrito: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
    cantidad: {
      type: dataTypes.INTEGER,
    },
    id_publicacion: {
      type: dataTypes.INTEGER,
      foreignKey: true,
    },
  };
  let config = {
    tableName: "Carrito_Detalle",
    timestamps: false,
  };
  const CarritoDetalle = sequelize.define(alias, columnas, config);

  CarritoDetalle.associate = function (models) {
    CarritoDetalle.belongsTo(models.Publicacion, {
      as: "publicacion",
      foreignKey: "id_publicacion",
    });

    CarritoDetalle.belongsTo(models.Carrito, {
      as: "carrito",
      foreignKey: "id_carrito",
    });
  };
  return CarritoDetalle;
};
