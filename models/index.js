const User = require("./User");
const Plan = require("./Plan");
const Comment = require("./Comment");
const Class = require("./Class");
const Category = require("./Category")
const PlanClass = require('./PlanClass');
const ClassCategory = require('./ClassCategory');

// user associations
// user has many plans
User.hasMany(Plan, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

// plan belongs to user
Plan.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

// user has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// comment belongs to user
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// plan has many comments
Plan.hasMany(Comment, {
  foreignKey: "plan_id",
  onDelete: "CASCADE",
});

// comment belongs to plan
Comment.belongsTo(Plan, {
  foreignKey: "plan_id",
  onDelete: "CASCADE",
});

// category belongs to many classes through ClassCategory
Category.belongsToMany(Class, { 
	through: ClassCategory,
	foreignKey: "category_id",
	onDelete: 'CASCADE'
});	

// class belongs to many categories through ClassCategory
Class.belongsToMany(Category, {
  through: ClassCategory,
  foreignKey: "class_id",
  onDelete: 'CASCADE'
});

// plan belongs to many classes through PlanClass
Plan.belongsToMany(Class, {
  through: PlanClass,
  foreignKey: "plan_id",
  onDelete: "CASCADE",
});

// class belongs to many  plans through PlanClass
Class.belongsToMany(Plan, {
  through: PlanClass,
  foreignKey: "class_id",
  onDelete: "CASCADE",
});

module.exports = { User, Plan, Comment, Class, Category, PlanClass, ClassCategory };