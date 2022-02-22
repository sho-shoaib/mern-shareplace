import express from "express";
import {
  getAllPlaces,
  getPlaceById,
  getPlacesByUserId,
  addPlace,
  updatePlace,
  deletePlace,
} from "../controllers/placecontroller.js";

const router = express.Router();

router.route("/").get(getAllPlaces).post(addPlace);
router.route("/:id").get(getPlaceById).patch(updatePlace).delete(deletePlace);
router.route("/user/:id").get(getPlacesByUserId);

export default router;
