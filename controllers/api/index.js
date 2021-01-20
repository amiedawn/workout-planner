const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const planRoutes = require('./plan-routes.js');

router.use("/users", userRoutes);
router.use('/plans', planRoutes);

module.exports = router;
