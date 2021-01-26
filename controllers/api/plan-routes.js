const router = require("express").Router();
const sequelize = require("../../config/connection");
//const { Plan, User, Comment, Class, Category } = require("../../models");
const { Plan, User, Comment } = require("../../models");

// get all plans
router.get("/", (req, res) => {
  console.log("======================");
  Plan.findAll({
    order: [["created_at", "DESC"]],
    // Query configuration ,add comment id???
    attributes: [
      "id",
      "plan_title",
      "category_name",
      "class_name",
      "user_id",
      "created_at",
    ],
    order: [["created_at", "DESC"]],
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
    .then((dbPlanData) => res.json(dbPlanData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Plan.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "plan_title",
      "category_name",
      "class_name",
      "user_id",
      "created_at",
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "plan_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      // {
      //   model: Class,
      //   attributes: ["id", "class_name"],
      // },
      // {
      //   model: Category,
      //   attributes: ["id", "category_name"],
      // },
    ],
  })
    .then((dbPlanData) => {
      if (!dbPlanData) {
        res.status(404).json({ message: "No plan found with this id" });
        return;
      }
      res.json(dbPlanData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* add withAuth */
router.post("/", (req, res) => {
  Plan.create({
    plan_title: req.body.plan_title,
    category_name: req.body.category_name,
    class_name: req.body.class_name,
    user_id: req.body.user_id,
  })
    .then((dbPlanData) => res.json(dbPlanData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* add withauth */
router.put("/:id", (req, res) => {
  Plan.update(
    {
      plan_title: req.body.plan_title,
      category_name: req.body.category_name,
      class_name: req.body.class_name
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPlanData) => {
      if (!dbPlanData) {
        res.status(404).json({ message: "No plan found with this id" });
        return;
      }
      res.json(dbPlanData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* add withAuth */
router.delete("/:id", (req, res) => {
  Plan.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPlanData) => {
      if (!dbPlanData) {
        res.status(404).json({ message: "No plan found with this id" });
        return;
      }
      res.json(dbPlanData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;