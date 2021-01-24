const { Plan } = require("../models");

const planData = [
  {
    plan_title: "Short pump",
    category_name: "Strength Training",
    class_name: "30 minute Pump",
    user_id: 1,
  },
  {
    plan_title: "Short circuit",
    category_name: "Strength Training",
    class_name: "30 minute Circuit",
    user_id: 2,
  },
  {
    plan_title: "Short HIIT",
    category_name: "Cardio",
    class_name: "30 minute HIIT",
    user_id: 3,
  },
  {
    plan_title: "Long spin",
    category_name: "Cardio",
    class_name: "60 minute Spin",
    user_id: 4,
  },
  {
    plan_title: "Long yoga",
    category_name: "Core Conditioning",
    class_name: "60 minute Yoga",
    user_id: 5,
  },
  {
    plan_title: "Long pilates",
    category_name: "Toning",
    class_name: "60 minute Pilates",
    user_id: 6,
  },
];

const seedPlans = () => Plan.bulkCreate(planData);

module.exports = seedPlans;
