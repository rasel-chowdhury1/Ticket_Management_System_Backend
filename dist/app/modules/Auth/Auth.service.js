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
exports.AuthServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const User_model_1 = require("../User/User.model");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log({payload})
    //checking if the user is exists
    const isUserExists = yield User_model_1.UserModel.findOne({ email: payload === null || payload === void 0 ? void 0 : payload.email }).select("+password");
    // console.log({isUserExists})
    if (!isUserExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This user is not found!");
    }
    //checking if the password is correct
    const isPasswordMatch = yield bcrypt_1.default.compare(payload === null || payload === void 0 ? void 0 : payload.password, isUserExists.password);
    // console.log({isPasswordMatch})
    if (!isPasswordMatch) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "Password does not match...!!!");
    }
    //Access Granted: Send AccessToken, RefreshToke
    const userId = isUserExists._id.toString();
    //  console.log("user id -> ", userId)
    const jwtPayload = {
        userId: userId,
        email: isUserExists.email,
        role: isUserExists.role
    };
    //create token and send to the client
    const accessToken = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.jwt_access_secret, { expiresIn: '30d' });
    return {
        isUserExists,
        accessToken,
    };
});
exports.AuthServices = {
    loginUser,
};
