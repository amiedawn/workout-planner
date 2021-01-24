const { ClassCategory } = require("../models");

const classCategoryData = [
  {
    class_id: 1,
    category_id: 1,
  },
  {
    class_id: 1,
    category_id: 3,
  },
  {
    class_id: 1,
    category_id: 4,
  },
  {
    class_id: 2,
    category_id: 1,
  },
  {
    class_id: 2,
    category_id: 2,
  },
  {
    class_id: 2,
    category_id: 3,
  },
  {
    class_id: 3,
    category_id: 2,
  },
  {
    class_id: 4,
    category_id: 2,
  },
  {
    class_id: 4,
    category_id: 4,
  },
];

const seedClassCategories = () => ClassCategory.bulkCreate(classCategoryData);

module.exports = seedClassCategories;
