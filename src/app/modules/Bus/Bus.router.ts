import express from "express";
import validateRequest from "../../middelwares/validRequest";
import { BusValidationZod } from "./Bus.validationZod";
import { BusController } from "./Bus.controller";
import auth from "../../middelwares/auth";

const router = express.Router();

router.post("/admin/bus",
    auth('admin'),
    validateRequest(BusValidationZod.CreateBusValidationSchema),
    BusController.CreateBus
)


router.put("/admin/bus/:id",
    auth('admin'),
    validateRequest(BusValidationZod.UpdateBusValidationSchema),
    BusController.updateBus
)

router.delete("/admin/bus/:id",
    auth('admin'),
    BusController.deleteBus
)


router.get("/buses",
    BusController.getAllBuses
)


router.get("/bus/:id",
    BusController.getSingleBus
)


export const BusRouter = router;