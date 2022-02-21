import express from "express";
import {
  getAllPlaces,
  getPlaceById,
  getPlacesByUserId,
  addPlace,
} from "../controllers/placecontroller.js";

const router = express.Router();

router.route("/").get(getAllPlaces).post(addPlace);
router.route("/:id").get(getPlaceById);
router.route("/user/:id").get(getPlacesByUserId);

export default router;
