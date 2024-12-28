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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusServices = void 0;
const Bus_model_1 = require("./Bus.model");
const createBusIntoDb = (BusData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Bus_model_1.BusModel.create(BusData);
    return result;
});
const getSingleBusFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Bus_model_1.BusModel.findById(id);
    return result;
});
const getAllBusesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Bus_model_1.BusModel.find({ isDeleted: false });
    return result;
});
const updateBusIntoDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log({ updateData });
    const result = yield Bus_model_1.BusModel.findByIdAndUpdate(id, updateData, {
        new: true
    });
    console.log("update result -> ", result);
    return result;
});
const deleteBustIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Bus_model_1.BusModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
});
exports.BusServices = {
    createBusIntoDb,
    getSingleBusFromDB,
    getAllBusesFromDB,
    updateBusIntoDB,
    deleteBustIntoDB
};
