const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dashboard-routes");
const coreConditioningRoutes = require("./core-conditioning");
const strengthRoutes = require("./strength-training");
const cardioRoutes = require("./cardio");
const toningRoutes = require("./toning");


router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/core-conditioning", coreConditioningRoutes);
router.use("/strength-training", strengthRoutes);
router.use("/cardio", cardioRoutes);
router.use("/toning", toningRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
