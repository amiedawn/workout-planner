const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class PlanClass extends Model {}

PlanClass.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    plan_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "plan",
        key: "id",
      },
    },
    class_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "class",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "plan_class",
  }
);

module.exports = PlanClass;
