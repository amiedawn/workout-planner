const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Category model
class Category extends Model {}

// create fields/columns for Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /* AC put back in
    /*  AM Commented out -  Not needed - creates circular ref. */
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
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;