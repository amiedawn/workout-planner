const User = require("./User");
const Plan = require("./Plan");
const Comment = require("./Comment");

// user associations
User.hasMany(Plan, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

Plan.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Plan, {
  foreignKey: "plan_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "plan_id",
  onDelete: "CASCADE",
});

Plan.hasMany(Comment, {
  foreignKey: "plan_id",
  onDelete: "CASCADE",
});

module.exports = { User, Plan, Comment };
