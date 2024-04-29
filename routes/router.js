import { Router } from "express";
import AuthController from "../controllers/Authcontroller.js";

const router = Router();

router.post("/auth/register", AuthController.register);

export default router;
