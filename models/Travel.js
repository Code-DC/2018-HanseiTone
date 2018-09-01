const models = require('.');

module.exports = (sequelize, DataTypes) => {
  const Travel = sequelize.define(
    "Travel",
    {
      tId: {
        field: "tid",
        type: DataTypes.INTEGER(80),
        autoIncrement: true,
        primaryKey: true,
      },
      uId: {
        field: "uid",
        type: DataTypes.INTEGER(80),
        allowNull: false,
        reference: {
          model: models.User,
          key: 'uId'
        }
      },
      travelName: {
        field: "travel_name",
        type: DataTypes.STRING(126),
        allowNull: false
      },
      like: {
        field: "like",
        type: DataTypes.STRING(126),
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "travel",
      timestamps: true
    }
  );
  return Travel;
};