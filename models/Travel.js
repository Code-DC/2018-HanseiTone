const models = require('.');

module.exports = (sequelize, DataTypes) => {
  const Travel = sequelize.define(
    "Travel",
    {
      tId: {
        field: "tid",
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      uId: {
        field: "uid",
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: models.User,
          key: 'uId'
        }
      },
      travelName: {
        field: "travel_name",
        type: DataTypes.STRING,
        allowNull: false
      },
      like: {
        field: "like",
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      course: {
        field: "course",
        type: DataTypes.STRING,
        allowNull: false
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