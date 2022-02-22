import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/usercontroller.js";

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").patch(updateUser).get(getUserById);

export default router;
