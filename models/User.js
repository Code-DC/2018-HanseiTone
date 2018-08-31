module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      uId: {
        field: "uid",
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        field: "email",
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      username: {
        field: "username",
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        field: "password",
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      underscored: true,
      freezeTableName: true,
      tableName: "user",
      timestamps: true
    }
  );
  return User;
};