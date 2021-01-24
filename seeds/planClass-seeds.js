const { PlanClass } = require("../models");

const planClassData = [
  {
    plan_id: 1,
    class_id: 1,
  },
  {
    plan_id: 2,
    class_id: 2
  },
  {
    plan_id: 3,
    class_id: 3,
  },
  {
    plan_id: 4,
    class_id: 4,
  },
  {
    plan_id: 5,
    class_id: 5,
  },
  {
    plan_id: 6,
    class_id: 6,
  },
];

const seedPlanClasses = () => PlanClass.bulkCreate(planClassData);

module.exports = seedPlanClasses;
