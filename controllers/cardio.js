const router = require('express').Router();
const sequelize = require("../config/connection");
const { Class, Category } = require('../models');
//const withAuth = require('../utils/auth');

/* get all plans for dashboard ADD WHERE USER ID & REQ.SESSION after login works
Amie DONE: also add include model comment when that is created. */
router.get('/', (req, res) => {
  console.log("================ get dashboard route");
  Class.findAll({
    attributes: ["id", "class_name"],
    include:[
      {
        model: Category,
        where: {
          id: 2
        },
      }
    ]
    })  
    .then((dbClassData) => {
      console.log("make it to render dashboard");
      const classes = dbClassData.map((classes) => classes.get({ plain: true }));
      res.render("cardio", {
     
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