import express from "express";
import validateRequest from "../../middelwares/validRequest";
import { AuthValidationZod } from "./Auth.validationZod";
import { UserControllers } from "../User/User.controller";
import { AuthController } from "./Auth.controller";
import UserValidationSchemaZod from "../User/User.validationZod";
import auth from "../../middelwares/auth";





const router = express.Router();

router.post('/login',
    validateRequest(AuthValidationZod.loginValidationSchema),
    AuthController.loginUser
)

router.post('/register',
    validateRequest(UserValidationSchemaZod),
    UserControllers.createUser
)

router.post('/logout',
    AuthController.logout
)

router.get("/users",
    auth("admin"),
    UserControllers.getAllUsers
)
router.patch("/users/:id/role",
    auth("admin"),
    UserControllers.updateUser
)

export const AuthRouter = router;