const express = require("express");

const {flightMiddlewares} = require("../../middlewares/index");

const cityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");
const airportController = require("../../controllers/airport-controller");

const router = express.Router();

router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destroy);
router.get("/city/:id", cityController.get);
router.get("/city", cityController.getAll);
router.patch("/city/:id", cityController.update);

router.post(
  "/flights",
  flightMiddlewares.validateCreateFlight,
  flightController.create
);
router.get("/flights", flightController.getAll);

router.post("/airports", airportController.create);

module.exports = router;
