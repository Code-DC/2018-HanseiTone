const models = require('.');

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      cId: {
        field: "cid",
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tId: {
        field: "tid",
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
          model: models.Travel,
          key: 'tId'
        }
      },
      courselName: {
        field: "coursel_name",
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "course",
      timestamps: true
    }
  );
  return Course;
};