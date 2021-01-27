const router = require('express').Router();
const sequelize = require("../config/connection");
const { Plan, User, Comment } = require('../models');
const withAuth = require("../utils/auth");

router.get('/', withAuth, (req, res) => {
  console.log("================ get dashboard route");
  Plan.findAll({
    attributes: ["id", "plan_title", "category_name", "class_name", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "plan_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPlanData) => {
      console.log("make it to render dashboard");
      const plans = dbPlanData.map((plan) => plan.get({ plain: true }));
      res.render("dashboard", {
        plans,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {  
    Plan.findOne({
      where: {
        id: req.params.id
      },
    attributes: [
      'id',
      'plan_title',
      'category_name',
      'class_name',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'plan_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPlanData => {
      if (!dbPlanData) {
        res.status(404).json({ message: 'No plan found with this id' });
        return;
      }
        const plan = dbPlanData.get({ plain: true });
        
        res.render('edit-plan', {
          plan,
          loggedIn: req.session.loggedIn,
          userName: req.session.userName
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
}); 

router.get("/create/", withAuth, (req, res) => {  
  Plan.findAll({
    where: {
    // use the ID from the session
      user_id: req.session.user_id,
    },
    attributes: [
      'id',
      'plan_title',
      'category_name',
      'class_name',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'plan_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then((dbPlanData) => {
      const plans = dbPlanData.map((plan) => plan.get({ plain: true }));
      res.render("add-plan", { plans, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}); 

module.exports = router;