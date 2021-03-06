const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Plan, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// get all plans
router.get("/", (req, res) => {
  console.log("======================");
  Plan.findAll({
    order: [["created_at", "DESC"]],
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

router.post("/", withAuth, (req, res) => {
  Plan.create({
    plan_title: req.body.plan_title || "Click Edit to add a title.",
    category_name: req.body.category_name,
    class_name: req.body.class_name,
    user_id: req.session.user_id,
  })
    .then((dbPlanData) => res.json(dbPlanData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
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

router.delete("/:id", withAuth, (req, res) => {
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