const models = require('.');

module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      tId: {
        field: "tid",
        type: DataTypes.INTEGER(80),
        autoIncrement: true,
        primaryKey: true
      },
      pId: {
        field: "pid",
        type: DataTypes.INTEGER(80),
        allowNull: false,
        reference: {
          model: models.Place,
          key: 'pId'
        }
      },
      tagName: {
        field: "tag_name",
        type: DataTypes.STRING(126),
        allowNull: false
      }
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "tag",
      timestamps: true
    }
  );
  return Tag;
};