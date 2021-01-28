const router = require('express').Router();
const sequelize = require("../config/connection");
const { Class, Category } = require('../models');
const withAuth = require('../utils/auth');

/* get all plans for dashboard ADD WHERE USER ID & REQ.SESSION after login works */
router.get('/', withAuth, (req, res) => {
  console.log("================ get strength-training route");
  Class.findAll({
    attributes: ["id", "class_name"],
    include:[
      {
        model: Category,
        where: {
          id: 1
        },
      }
    ]
    })  
    .then((dbClassData) => {
      console.log("make it to render dashboard");
      const classes = dbClassData.map((classes) => classes.get({ plain: true }));
      res.render("strength-training", {
        classes,
        loggedIn: req.session.loggedIn,
        //loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;