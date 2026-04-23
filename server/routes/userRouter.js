import express from "express";
import {
  getUsers,
  addUsers,
  editUsers,
  deleteUsers,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/", getUsers);

router.post("/user", addUsers);

router.put("/user/:id", editUsers);

router.delete("/user/:id", deleteUsers);
export default router;
