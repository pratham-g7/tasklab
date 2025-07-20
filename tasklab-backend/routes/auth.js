import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

// Verifies token and returns decoded user data
router.get("/verify", verifyToken, (req, res) => {
  res.status(200).json({ message: "Token is valid", user: req.user });
});

export default router;
