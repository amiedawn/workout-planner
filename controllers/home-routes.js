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

//added here temporarily to test -- can move it to new location
router.get('/newPlan', (req, res) => {
  res.render('newPlan');
});

router.get('/calendar', (req, res) => {
  res.render('calendar');
});
module.exports = router;


/*AM test plan
router.get('/plan/:id', (req, res) => {
  const plan = {
    id: 1,
    plan_title: "Pump Workout #1",
    category_name: "Strength",
    class_name: "30min-pump",
    user_id: 1,
    created_at: new Date(),
    comments: [{}, {}],
    user: {
      username: 'test_user'
    }
  };

  res.render('single-plan', { plan });
});

*/