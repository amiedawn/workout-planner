const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const planRoutes = require('./plan-routes.js');
const commentRoutes = require('./comment-routes');
const categoryRoutes = require('./category-routes');
const classRoutes = require('./class-routes');



router.use("/users", userRoutes);
router.use('/plans', planRoutes);
router.use('/comments', commentRoutes);
router.use('/categories', categoryRoutes);
router.use('/classes', classRoutes);

module.exports = router;
