const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Plan model
class Plan extends Model {}

// create fields/columns for Plan model
Plan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    plan_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /*category_name: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    class_name: {
      type: DataTypes.INTEGER,
      references: {
        model: 'class',
        key: 'id'
      }
    },*/
    
    /*user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }*/
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'plan'
  }
);

module.exports = Plan;