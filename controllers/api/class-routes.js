const router = require("express").Router();
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
      "category_id",
    ],
    include: [
      {
        model: Category,
        attributes: ["category_name"],
      },
    ],
  })
    .then((dbClassData) => res.json(dbClassData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Class.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "class_name",
      "category_name",
    ],
    include: [
      {
        model: Category,
        attributes: ["category_name"],
      },
    ],
  })
    .then((dbClassData) => {
      if (!dbClassData) {
        res.status(404).json({ message: "No class found with this id" });
        return;
      }
      res.json(dbClassData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Class.create({
    class_name: req.body.class_name,
    category_id: req.body.category_id,
  })
    .then((dbClassData) => res.json(dbClassData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Class.update(
    {
      plan_title: req.body.plan_title,
      category_id: req.body.category_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbClassData) => {
      if (!dbClassData) {
        res.status(404).json({ message: "No class found with this id" });
        return;
      }
      res.json(dbClassData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Class.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbClassData) => {
      if (!dbClassData) {
        res.status(404).json({ message: "No class found with this id" });
        return;
      }
      res.json(dbClassData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;