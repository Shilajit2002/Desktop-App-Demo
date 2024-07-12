import express from "express";
import { fetchUser, registration } from "../Controller/UserController.js";

const router = express.Router();

router.post("/register", registration);
router.get("/get-user", fetchUser);

export default router;
