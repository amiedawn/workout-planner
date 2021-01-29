const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Class model
class Class extends Model {}

// create fields/columns for Class model
Class.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    class_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "class",
  }
);

module.exports = Class;
