const router = require("express").Router();
const { User, Plan, Comment } = require("../../models");
const sequelize = require("../../config/connection");

// GET /api/users
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Plan,
        attributes: [
          "id",
          "plan_title",
          "category_name",
          "class_name",
          "user_id",
          "created_at",
        ],
      },  
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "plan_id",
          "user_id",
          "created_at"
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users
router.post('/', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Login
router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {
    dbUserData.valid=req.body.password == dbUserData.password;
    res.json(dbUserData)
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }
    console.log(dbUserData)
    console.log(req.body.password)
    console.log(dbUserData.password)

    const validPassword = req.body.password == dbUserData.password// dbUserData.checkPassword(req.body.password);
    console.log(validPassword)
    
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }



    // req.session.save(() => {
    //   req.session.user_id = dbUserData.id;
    //   req.session.username = dbUserData.username;
    //   req.session.loggedIn = true;
    //   //res.json({ user: dbUserData, message: 'You are now logged in!' });
    // });

  });
});

//logout


// PUT /api/users/1
router.put('/:id', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
