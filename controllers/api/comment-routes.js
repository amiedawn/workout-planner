const router = require("express").Router();
const { Comment } = require("../../models");
const sequelize = require("../../config/connection");
/* const withAuth = require("../../utils/auth"); add in with authentication */

router.get("/", (req, res) => {
  Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/*router.post("/", withAuth (req, res) => { add in when authentication */
router.post("/", (req, res) => {  
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.body.user_id,
    plan_id: req.body.plan_id,
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

/*router.delete("/:id", withAuth, (req, res) => { add in with authentication */
router.delete("/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({ message: "No comment found with this id!" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
