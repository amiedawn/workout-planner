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
router.get('/strength-training', (req, res) => {
  res.render('strength-training');
});

router.get('/cardio', (req, res) => {
  res.render('cardio');
});

router.get('/core-conditioning', (req, res) => {
  res.render('core-conditioning');
});

router.get('/toning', (req, res) => {
  res.render('toning');
});

router.get('/newPlan', (req, res) => {
  res.render('newPlan');
});

router.get('/calendar', (req, res) => {
  res.render('calendar');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
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