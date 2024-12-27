import { TBus } from "./Bus.type";
import { BusModel } from "./Bus.model";


const createBusIntoDb = async ( BusData: TBus) => {
    const result = await BusModel.create(BusData)

    return result;
}

const getSingleBusFromDB = async (id: string) => {
    const result  = await BusModel.findById(id);
    return result
}

const getAllBusesFromDB = async () => {
    const result = await BusModel.find({isDeleted: false});
    return result;
}

const updateBusIntoDB = async (id: string, updateData: Partial<TBus>) => {
    console.log({updateData})
    const result = await BusModel.findByIdAndUpdate(id, updateData, {
        new: true
    })

    console.log("update result -> ", result)

    return result
}

const deleteBustIntoDB = async (id: string) => {
    const result = await BusModel.findByIdAndUpdate(id, {isDeleted: true}, {new: true})
    return result
}



export const BusServices = {
    createBusIntoDb,
    getSingleBusFromDB,
    getAllBusesFromDB,
    updateBusIntoDB,
    deleteBustIntoDB
}