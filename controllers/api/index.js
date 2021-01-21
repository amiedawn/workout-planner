const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const planRoutes = require('./plan-routes.js');
const commentRoutes = require('./comment-routes');

router.use("/users", userRoutes);
router.use('/plans', planRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
