const { User, Plan } = require("../models");

const userData = [
  {
    username: "jpauley",
    password: "password1",
  },
  {
    username: "mlauer",
    password: "password2",
  },
  {
    username: "aroker",
    password: "password3",
  },
  {
    username: "hkotb",
    password: "password4",
  },
  {
    username: "jbush",
    password: "password5",
  },
  {
    username: "sguthrie",
    password: "password6",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
