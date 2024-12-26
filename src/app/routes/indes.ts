import express  from "express";
import { AuthRouter } from "../modules/Auth/Auth.router";
import { BusRouter } from "../modules/Bus/Bus.router";

const router = express.Router();

router.use("/auth", AuthRouter);
router.use("/", BusRouter)

export default router