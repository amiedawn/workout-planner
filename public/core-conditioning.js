const router = require('express').Router();
const sequelize = require("../config/connection");
const { Class, Category, ClassCategory } = require('../models');

router.get('/', (req, res) => {
    Class.findAll({
      attributes: [
        'id',
        'classname'
      ],
    })
      .then(dbClassData => {
          res.render('core-conditioning', dbClassData['class_name']);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });




/*const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Category, Class } = require("../../models");

// get all classes
router.get("/", (req, res) => {
  console.log("======================");
  Class.findAll({
    order: [["created_at", "DESC"]],
    // Query configuration ,add comment id???
    attributes: [
      "id",
      "class_name",
    ],
    include: [
      {
        model: Category,
        attributes: ["category_id", "category_name"],
      },
    ],
  })
     .then((dbClassData) => {
        const classes = dbClassData.map((plan => class.get({ plain: true }));
        /*res.render("add-plan", { plans, loggedIn: true });  add in with authentication
        res.render("add-plan", { classes });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }); 
  */
  module.exports = router; 
<script src = "/core-conditioning.js"></script>