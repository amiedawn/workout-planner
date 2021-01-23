const seedUsers = require("./user-seeds");
const seedPlans = require("./plan-seeds");
const seedComments = require("./comment-seeds");
const seedClasses = require("./class-seeds");
const seedCategories = require("./category-seeds");
const seedClassCategories = require("./classCategory-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({
    force: true
  });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");

  await seedPlans();
  console.log("--------------");

  await seedComments();
  console.log("--------------");

  await seedClasses();
  console.log("--------------");

  await seedCategories();
  console.log("--------------");

  await seedClassCategories();
  console.log("--------------");
  

  process.exit(0);
};

seedAll();