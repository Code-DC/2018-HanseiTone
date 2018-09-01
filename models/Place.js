module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define(
    "Place",
    {
      pId: {
        field: "pid",
        type: DataTypes.INTEGER(191),
        primaryKey: true
      },
      placeName: {
        field: "place_name",
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        field: "address",
        type: DataTypes.STRING,
        allowNull: false
      },
      imagePath: {
        field: "image_path",
        type: DataTypes.STRING,
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