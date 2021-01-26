const { User, Plan } = require("../models");

const userData = [
  {
    username: "jpauley",
    email: "jpauley@email.com",
    password: "password1",
  },
  {
    username: "mlauer",
    email: "mlauer@hotmail.com",
    password: "password2",
  },
  {
    username: "aroker",
    email: "aroker@gmail.com",
    password: "password3",
  },
  {
    username: "hkotb",
    email: "hkotb@email.com",
    password: "password4",
  },
  {
    username: "jbush",
    email: "jbush@gmail.com",
    password: "password5",
  },
  {
    username: "sguthrie",
    email: "sguthrie@hotmail.com",
    password: "password6",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
