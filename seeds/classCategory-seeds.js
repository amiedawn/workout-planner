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
  {
    class_id: 5,
    category_id: 2,
  },
  {
    class_id: 6,
    category_id: 2,
  },
  {
    class_id: 7,
<<<<<<< HEAD
    category_id: 3,
  },
  {
    class_id: 7,
    category_id: 2,
=======
    category_id: 2,
  },
  {
    class_id: 7,
    category_id: 3,
>>>>>>> feature/#23-seed-tables
  },
  {
    class_id: 8,
    category_id: 3,
  },
  {
    class_id: 8,
    category_id: 4,
  },
  {
    class_id: 9,
    category_id: 3,
  },
  {
    class_id: 9,
    category_id: 4,
  },
  {
    class_id: 10,
    category_id: 4,
  },
  {
    class_id: 10,
    category_id: 3,
  },
  {
    class_id: 11,
    category_id: 3,
  },
  {
    class_id: 11,
    category_id: 4,
  },
  {
    class_id: 12,
    category_id: 1,
  },
  {
    class_id: 12,
    category_id: 4,
  },
  {
    class_id: 12,
    category_id: 3,
  },
  {
    class_id: 13,
    category_id: 1,
  },
  {
    class_id: 13,
    category_id: 2,
  },
  {
    class_id: 13,
    category_id: 3,
  },
  {
    class_id: 14,
    category_id: 2,
  },
  {
    class_id: 15,
    category_id: 2,
  },
  {
    class_id: 15,
    category_id: 4,
  },
  {
    class_id: 16,
    category_id: 2,
  },
  {
    class_id: 17,
    category_id: 2,
  },
  {
    class_id: 18,
    category_id: 2,
  },
  {
    class_id: 18,
    category_id: 3,
  },
  {
    class_id: 19,
    category_id: 3,
  },
  {
    class_id: 19,
    category_id: 4,
  },
  {
    class_id: 20,
    category_id: 3,
  },
  {
    class_id: 20,
    category_id: 4,
  },
  {
    class_id: 21,
    category_id: 3,
  },
  {
    class_id: 21,
    category_id: 4,
  },
  {
    class_id: 22,
    category_id: 3,
  },
  {
    class_id: 22,
    category_id: 4,
  },
];

const seedClassCategories = () => ClassCategory.bulkCreate(classCategoryData);

module.exports = seedClassCategories;
