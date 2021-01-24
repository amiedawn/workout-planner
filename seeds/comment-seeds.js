const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    plan_id: 5,
    comment_text: "I love this class!!",
  },
  {
    user_id: 4,
    plan_id: 4,
    comment_text: "Wow, I need to do this one again!",
  },
  {
    user_id: 1,
    plan_id: 4,
    comment_text: "Awesome teacher!",
  },
  {
    user_id: 6,
    plan_id: 5,
    comment_text: "Can't wait to do it again!",
  },
  {
    user_id: 2,
    plan_id: 2,
    comment_text: "This is great!",
  },
  {
    user_id: 3,
    plan_id: 4,
    comment_text: "This is one of the best classes I have done in a long time.",
  },
  {
    user_id: 5,
    plan_id: 3,
    comment_text: "AMAZING!!",
  },
  {
    user_id: 2,
    plan_id: 1,
    comment_text: "Sorry, but this wasn't my favorite.",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
