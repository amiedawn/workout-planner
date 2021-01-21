const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage", {
    id: 1,
    plan_title: "Pump Workout #1",
    category_name: "Strength",
    class_name: "30min-pump",
    user_id: 1,
    created_at: new Date(),
    comments: [{}, {}],
    user: {
      username: "test_user",
    },
  });
});

module.exports = router;
