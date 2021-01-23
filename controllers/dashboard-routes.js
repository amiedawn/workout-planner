const router = require('express').Router();

const { Plan, User, Comment } = require('../models');
//const withAuth = require('../utils/auth');

/* get all plans for dashboard ADD WHERE USER ID & REQ.SESSION after login works
also add include model comment when that is created. */
router.get('/', (req, res) => {
  Plan.findAll({
      attributes: [
      'plan_title',
      'category_name',
      'class_name',
    ],
  })
    .then(dbPostData => {
      const plans = dbPostData.map(plans => plans.get({ plain: true }));
      res.render('dashboard', { 
          plans, 
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* -- ADD when Add views/partials/edit-plan.handlebars & public/edit-plan.js
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
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No plan found with this id' });
        return;
      }
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-plan', {
          post,
          loggedIn: req.session.loggedIn,
          userName: req.session.userName
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
}); */

module.exports = router;