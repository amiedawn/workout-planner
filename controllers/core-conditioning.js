const router = require('express').Router();
const sequelize = require("../config/connection");
const { Class, Category } = require('../models');
const withAuth = require('../utils/auth');

/* get all plans for dashboard ADD WHERE USER ID & REQ.SESSION after login works*/
router.get('/', withAuth, (req, res) => {
  console.log("================ get core-conditioning route");
  Class.findAll({
    attributes: ["id", "class_name"],
    include:[
      {
        model: Category,
        where: {
          id: 3
        },
      }
    ]
    })  
    .then((dbClassData) => {
      console.log("make it to render dashboard");
      const classes = dbClassData.map((classes) => classes.get({ plain: true }));
        console.log("dbClassData", dbClassData);
        res.render("dashboard", {
          /* add "loggedIn: true" when authentication done */
          classes,
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;