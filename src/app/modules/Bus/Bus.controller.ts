import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { BusServices } from "./Bus.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const CreateBus = catchAsync( async (req: Request, res: Response) => {

    const result = await BusServices.createBusIntoDb(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bus created successfully",
        data: result
    })
})

const getAllBuses = catchAsync( async (req, res) => {

    const result = await BusServices.getAllBusesFromDB();
    
    if(result.length > 0){
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Buses retrieved successfully",
            data: result
        })
    }
    else{
        sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: "No Data Found",
            data: result
        })
    }
})

const getSingleBus = catchAsync( async (req, res) => {
    const {id} = req.params;

    const result = await BusServices.getSingleBusFromDB(id);
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "A Bus retrieved successfully",
        data: result
    })
})

const updateBus = catchAsync( async (req: Request, res: Response) => {
    const {id} = req.params;

    const result = await BusServices.updateBusIntoDB(id, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bus updated successfully",
        data: result
    })
})

const deleteBus = catchAsync( async (req: Request, res: Response) => {
    const {id} = req.params;

    const result = await BusServices.deleteBustIntoDB(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Bus Deleted successfully",
        data: result
    })
})

export const BusController = {
    CreateBus,
    getAllBuses,
    getSingleBus,
    updateBus,
    deleteBus
    
}