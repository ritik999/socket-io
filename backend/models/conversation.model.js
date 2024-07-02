import mongoose, { mongo } from "mongoose";

const conversationSchema=new mongoose.Schema({
    participents:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    message:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Message',
            default:[]
        }
    ]
},{timestamps:true})

export const Conversation=mongoose.model('Conversation',conversationSchema);

