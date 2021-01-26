// import the Sequelize constructor from the library

// const Sequelize = require("sequelize");
// require("dotenv").config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     "workout_planner_db",
//     "root",
//     "A1251370033a$", {
//       host: "localhost",
//       dialect: "mysql",
//       port: 3306,
//     }
//   );
// }
// module.exports = sequelize;

const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize("workout_planner_db", "", "A1251370033a$", {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;