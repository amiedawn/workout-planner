const router = require("express").Router();
const sequelize = require("../config/connection");
/*const { Plan, User, Comment } = require("../models"); <= don't use if no plans on homepage */
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
        /* add loggedIn: req.session.loggedIn, when authentication done */
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


//added here temporarily to test -- can move it to new location
router.get('/strength-training', (req, res) => {
  res.render('strength-training');
});

router.get('/cardio', (req, res) => {
  res.render('cardio');
});

router.get('/toning', (req, res) => {
  res.render('toning');
});

router.get('/calendar', (req, res) => {
  res.render('calendar');
});

router.get('/newPlan', (req, res) => {
  res.render('newPlan');
});

/* ADD WHERE USER ID & REQ.SESSION after login works */
//this mimics tech-blog project, but Amie doesn't think we need this on our homepage; keeping it just in case
// get all plans for homepage
// router.get("/", (req, res) => {
//   Plan.findAll({
//     attributes: ["id", "plan_title", "category_name", "class_name", "created_at"],
//     include: [
//       {
//         model: Comment,
//         attributes: ["id", "comment_text", "plan_id", "user_id", "created_at"],
//         include: {
//           model: User,
//           attributes: ["username"],
//         },
//       },
//       {
//         model: User,
//         attributes: ["username"],
//       },
//     ],
//   })
//     .then((dbPlanData) => {
//       const plans = dbPlanData.map((plan) => plan.get({ plain: true }));
//       res.render("homepage", {
//         plans,
//      /* add loggedIn: req.session.loggedIn, when authentication done */
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// get single 
//this mimics tech-blog project, but Amie doesn't think we need this on our homepage; keeping it just in case
/* -- ADD when Add views/partials/edit-plan.handlebars & public/edit-plan.js
/* add withauth when login done
router.get("/plan/:id", (req, res) => {
  Plan.findOne({
    where: {
      id: req.params.id,
    },
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

/* Alan: see if this is what you want here */
// router.get("/login", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }
//   res.render("login");
// });

// router.get("/signup", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/");
//     return;
//   }
//   res.render("signup");
// });

module.exports = router;
