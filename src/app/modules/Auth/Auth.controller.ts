import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./Auth.service";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";


const loginUser = catchAsync( async (req: Request, res: Response) => {

    const result = await AuthServices.loginUser(req.body);
    const {isUserExists, accessToken} = result;

    const userData = isUserExists.toObject();
    const { password, ...remainData } = userData;

    // sendResponse(res, {
    //     statusCode: httpStatus.OK,
    //     success: true,
    //     message: "User logged in successfully",
    //     data: result,
    // })

    res.status(200).json({
        success: true,
        statusCode: httpStatus.OK,
        message: "User logged in successfully",
        data: remainData,
        token: accessToken
    })
})

const logout = (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        statusCode: httpStatus.OK,
        message: "User loggout successfully",
    })

}

export const AuthController = {
    loginUser,
    logout
}