const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Strength Training",
  },
  {
    category_name: "Cardio",
  },
  {
    category_name: "Core Conditioning",
  },
  {
    category_name: "Toning",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
