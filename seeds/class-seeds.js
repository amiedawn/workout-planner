const { Class } = require("../models");

const classData = [
  {
    class_name: "30 minute Pump",
    category_id: 1,
  },
  {
    class_name: "30 minute Circuit",
    category_id: 1,
  },
  {
    class_name: "30 minute HIIT",
    category_id: 2,
  },
  {
    class_name: "30 minute Step Aerobics",
    category_id: 2,
  },
  {
    class_name: "30 minute Spin",
    category_id: 2,
  },
  {
    class_name: "30 minute Zumba",
    category_id: 2,
  },
  {
    class_name: "30 minute Combat",
    category_id: 3,
  },
  {
    class_name: "30 minute Worx",
    category_id: 3,
  },
  {
    class_name: "30 minute Barre",
    category_id: 3,
  },
  {
    class_name: "30 minute Yoga",
    category_id: 4,
  },
  {
    class_name: "30 minute Pilates",
    category_id: 4,
  },
  {
    class_name: "60 minute Pump",
    category_id: 1,
  },
  {
    class_name: "60 minute Circuit",
    category_id: 1,
  },
  {
    class_name: "60 minute HIIT",
    category_id: 2,
  },
  {
    class_name: "60 minute Step",
    category_id: 2,
  },
  {
    class_name: "60 minute Spin",
    category_id: 2,
  },
  {
    class_name: "60 minute Zumba",
    category_id: 2,
  },
  {
    class_name: "60 minute Combat",
    category_id: 3,
  },
  {
    class_name: "60 minute Worx",
    category_id: 3,
  },
  {
    class_name: "60 minute Barre",
    category_id: 3,
  },
  {
    class_name: "60 minute Yoga",
    category_id: 4,
  },
  {
    class_name: "60 minute Pilates",
    category_id: 4,
  },
  {
    class_name: "30 minute Pump",
    category_id: 3,
  },
  {
    class_name: "30 minute Pump",
    category_id: 4,
  },
  {
    class_name: "30 minute Circuit",
    category_id: 2,
  },
  {
    class_name: "30 minute Circuit",
    category_id: 3,
  },
  {
    class_name: "30 minute Step Aerobics",
    category_id: 4,
  },
  {
    class_name: "30 minute Combat",
    category_id: 2,
  },
  {
    class_name: "30 minute Worx",
    category_id: 4,
  },
  {
    class_name: "30 minute Barre",
    category_id: 4,
  },
  {
    class_name: "30 minute Yoga",
    category_id: 3,
  },
  {
    class_name: "30 minute Pilates",
    category_id: 3,
  },
  {
    class_name: "60 minute Pump",
    category_id: 3,
  },
  {
    class_name: "60 minute Pump",
    category_id: 4,
  },
  {
    class_name: "60 minute Circuit",
    category_id: 2,
  },
  {
    class_name: "60 minute Circuit",
    category_id: 3,
  },
  {
    class_name: "60 minute Step",
    category_id: 4,
  },
  {
    class_name: "60 minute Spin",
    category_id: 2,
  },
  {
    class_name: "60 minute Combat",
    category_id: 2,
  },
  {
    class_name: "60 minute Worx",
    category_id: 4,
  },
  {
    class_name: "60 minute Barre",
    category_id: 4,
  },
  {
    class_name: "60 minute Yoga",
    category_id: 3,
  },
  {
    class_name: "60 minute Pilates",
    category_id: 3,
  },
];

const seedClasses = () => Class.bulkCreate(classData);

module.exports = seedClasses;

