import express  from "express";
import { AuthRouter } from "../modules/Auth/Auth.router";

const router = express.Router();

router.use("/auth", AuthRouter);

export default router