"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const validRequest_1 = __importDefault(require("../../middelwares/validRequest"));
const Auth_validationZod_1 = require("./Auth.validationZod");
const User_controller_1 = require("../User/User.controller");
const Auth_controller_1 = require("./Auth.controller");
const User_validationZod_1 = __importDefault(require("../User/User.validationZod"));
const auth_1 = __importDefault(require("../../middelwares/auth"));
const router = express_1.default.Router();
router.post('/login', (0, validRequest_1.default)(Auth_validationZod_1.AuthValidationZod.loginValidationSchema), Auth_controller_1.AuthController.loginUser);
router.post('/register', (0, validRequest_1.default)(User_validationZod_1.default), User_controller_1.UserControllers.createUser);
router.post('/logout', Auth_controller_1.AuthController.logout);
router.get("/users", (0, auth_1.default)("admin"), User_controller_1.UserControllers.getAllUsers);
router.patch("/users/:id/role", (0, auth_1.default)("admin"), User_controller_1.UserControllers.updateUser);
exports.AuthRouter = router;
