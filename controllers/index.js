const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes");
const coreConditioningRoutes = require("./core-conditioning");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/core-conditioning", coreConditioningRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
