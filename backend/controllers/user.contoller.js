import mongoose from "mongoose";
import { User } from "../models/user.model";

export const getSidebarUsers=async(req,res)=>{
    try {
        const users=await User.find({_id:{$ne:req.user._id}}).select('-password');
    } catch (error) {
        res.status(401).json({message:error.message});
    }
}