import mongoose, { mongo } from "mongoose";

export const connetDb=async()=>{
    try {
        await mongoose.connect(process.env.db);
        console.log('db connected');
    } catch (error) {
        console.log('error to connect db',error.message);
    }
}
