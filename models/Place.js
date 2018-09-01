module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define(
    "Place",
    {
      pId: {
        field: "pid",
        type: DataTypes.INTEGER(80),
        primaryKey: true
      },
      placeName: {
        field: "place_name",
        type: DataTypes.STRING(126),
        allowNull: false
      },
      address: {
        field: "address",
        type: DataTypes.STRING(126),
        allowNull: false
      },
      imagePath: {
        field: "image_path",
        type: DataTypes.STRING(126),
        allowNull: true
      }
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "place",
      timestamps: true
    }
  );
  return Place;
};