const { Class } = require("../models");

const classData = [
  {
    class_name: "30 minute Pump",
  },
  {
    class_name: "30 minute Circuit",
  },
  {
    class_name: "30 minute HIIT",
  },
  {
    class_name: "30 minute Step",
  },
  {
    class_name: "30 minute Spin",
  },
  {
    class_name: "30 minute Zumba",
  },
  {
    class_name: "30 minute Combat",
  },
  {
    class_name: "30 minute Worx",
  },
  {
    class_name: "30 minute Barre",
  },
  {
    class_name: "30 minute Yoga",
  },
  {
    class_name: "30 minute Pilates",
  },
  {
    class_name: "60 minute Pump",
  },
  {
    class_name: "60 minute Circuit",
  },
  {
    class_name: "60 minute HIIT",
  },
  {
    class_name: "60 minute Step",
  },
  {
    class_name: "60 minute Spin",
  },
  {
    class_name: "60 minute Zumba",
  },
  {
    class_name: "60 minute Combat",
  },
  {
    class_name: "60 minute Worx",
  },
  {
    class_name: "60 minute Barre",
  },
  {
    class_name: "60 minute Yoga",
  },
  {
    class_name: "60 minute Pilates",
  },
  
];

const seedClasses = () => Class.bulkCreate(classData);

module.exports = seedClasses;

