const User = require("./User");
const Plan = require("./Plan");

// user associations
User.hasMany(Plan, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

Plan.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

module.exports = { User, Plan };
