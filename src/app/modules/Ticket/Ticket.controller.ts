import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { TicketServices } from "./Ticket.service";

const createTicket = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body)
  const result = await TicketServices.createTicketIntoDb(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Ticket created successfully",
    data: result,
  });
});

const getAllTickets = catchAsync(async (req, res) => {
  const result = await TicketServices.getAllTicketsFromDB();

  if (result.length > 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Tickets retrieved successfully",
      data: result,
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "No tickets found",
      data: result,
    });
  }
});

const getSingleTicket = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await TicketServices.getSingleTicketFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Ticket retrieved successfully",
    data: result,
  });
});

const updateTicket = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await TicketServices.updateTicketIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Ticket updated successfully",
    data: result,
  });
});

const deleteTicket = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await TicketServices.deleteTicketIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Ticket deleted successfully",
    data: result,
  });
});

const getAvailableTickets = catchAsync(async (req, res) => {
  const { busId } = req.query; // Assume busId is optional

  const result = await TicketServices.getAvailableTicketsFromDB(busId as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Available tickets retrieved successfully",
    data: result,
  });
});

const purchaseTicket = catchAsync(async (req: Request, res: Response) => {
  const { ticketId } = req.body;
  console.log({ticketId})
  const userId = req.user.userId; // Assuming `req.user` contains the authenticated user
  console.log({userId})
  const result = await TicketServices.purchaseTicketFromDB(ticketId, userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Ticket purchased successfully",
    data: result,
  });
});

export const TicketController = {
  createTicket,
  getAllTickets,
  getSingleTicket,
  updateTicket,
  deleteTicket,
  getAvailableTickets,
  purchaseTicket,
};
