const router = require("express").Router();
const sequelize = require("../config/connection");
const { Plan, User, Comment } = require("../models");
const { Category, Class } = require("../models");

// get all categories for homepage
router.get("/", (req, res) => {
  console.log("======================get category home route");
  Category.findAll({
    attributes: ["id", "category_name"],
    include: [
      {
        model: Class,
        attributes: ["class_name"],
      },
    ],
  })
    .then((dbCategoryData) => {
      const categories = dbCategoryData.map((category) =>
        category.get({ plain: true })
      );
      res.render("homepage", {
        categories,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
     res.redirect('/');
     return;
   }

   res.render('login');
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login"); //is this right? used to say signup, but don't have that file here
});

router.get('/homepage', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

   res.render('homepage');
});


// get all plans for homepage
router.get("/", (req, res) => {
  Plan.findAll({
    attributes: [
      "id",
      "plan_title",
      "category_name",
      "class_name",
      "created_at",
    ],
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
      const plans = dbPlanData.map((plan) => plan.get({ plain: true }));
      //res.render("homepage", { /*AC I think we want to navigate to dashboard here*/
      console.log ('render dashboard thru home-routes.js');
      res.render("dashboard", {
        plans,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single plan (**this route is necessary to have comment screen from dashboard)
router.get("/plan/:id", (req, res) => {
  Plan.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "plan_title",
      "category_name",
      "class_name",
      "created_at", 
    ],
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
      if (!dbPlanData) {
        res.status(404).json({ message: "No plan found with this id" });
        return;
      }

      const plan = dbPlanData.get({ plain: true });

      res.render("single-plan", {
        plan,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


/*added here temporarily to test -- can move it to new location
router.get('/strength-training', (req, res) => {
  res.render('strength-training');
});

router.get('/cardio', (req, res) => {
  res.render('cardio');
});

router.get('/toning', (req, res) => {
  res.render('toning');
});
*/
router.get('/calendar', (req, res) => {
  res.render('calendar');
});

router.get('/newPlan', (req, res) => {
  res.render('newPlan');
});

module.exports = router;
