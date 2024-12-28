"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusRouter = void 0;
const express_1 = __importDefault(require("express"));
const validRequest_1 = __importDefault(require("../../middelwares/validRequest"));
const Bus_validationZod_1 = require("./Bus.validationZod");
const Bus_controller_1 = require("./Bus.controller");
const auth_1 = __importDefault(require("../../middelwares/auth"));
const router = express_1.default.Router();
router.post("/admin/bus", (0, auth_1.default)('admin'), (0, validRequest_1.default)(Bus_validationZod_1.BusValidationZod.CreateBusValidationSchema), Bus_controller_1.BusController.CreateBus);
router.put("/admin/bus/:id", (0, auth_1.default)('admin'), (0, validRequest_1.default)(Bus_validationZod_1.BusValidationZod.UpdateBusValidationSchema), Bus_controller_1.BusController.updateBus);
router.delete("/admin/bus/:id", (0, auth_1.default)('admin'), Bus_controller_1.BusController.deleteBus);
router.get("/buses", Bus_controller_1.BusController.getAllBuses);
router.get("/bus/:id", Bus_controller_1.BusController.getSingleBus);
exports.BusRouter = router;
