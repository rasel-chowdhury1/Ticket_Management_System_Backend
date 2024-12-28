"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const User_model_1 = require("../modules/User/User.model");
const auth = (...requiredRules) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("token -> ",req.headers)
        const token = req.headers.authorization;
        //  console.log({token})
        //check if the token is sent from the client
        if (!token) {
            res.status(401).json({
                success: false,
                statusCode: http_status_1.default.UNAUTHORIZED,
                message: "You have no access to this route",
            });
        }
        //check if the token is valid
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret);
        //decoded
        // console.log({decoded});
        // const role = decoded.role;
        // const id = decoded.userId;
        const { email, role } = decoded;
        //checking if the user is exists
        const isUserExists = yield User_model_1.UserModel.findOne({ email: email });
        // console.log({isUserExists})
        if (!isUserExists) {
            res.status(401).json({
                success: false,
                statusCode: http_status_1.default.UNAUTHORIZED,
                message: "This user is not exists!!!",
            });
        }
        if (requiredRules && !requiredRules.includes(role)) {
            res.status(401).json({
                success: false,
                statusCode: http_status_1.default.UNAUTHORIZED,
                message: "You have no access to this route",
            });
        }
        req.user = decoded;
        next();
    }));
};
exports.default = auth;
