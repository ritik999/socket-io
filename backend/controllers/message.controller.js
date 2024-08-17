import { Conversation } from "../models/conversation.model";
import { Message } from "../models/message.model";

export const sendMessage=async(req,res)=>{
    try {
        const {message}=req.body;
        const {id:recieverId}=req.params;
        const senderId=req.user._id;

        let conversation=await Conversation.findOne({participents:{$all:[senderId,recieverId]}})

        if(!conversation){
            conversation=await Conversation.create({
                participents:[senderId,recieverId]
            })
        }

        const storeMessage=await Message.create({
                senderId,
                recieverId,
                message
        })

        if(storeMessage){
            conversation.message.push(storeMessage._id);
        }
        // await conversation.save();
        await Promise.all([conversation.save()]);
        res.status(201).json(storeMessage)
    } catch (error) {
        console.log(error.message);
    }
}

export const getMessage=async(req,res)=>{
    try {
        const {id:userToChatId}=req.params;
        const senderId=req.user._id;
    
        const conversations=await Conversation.findOne({
            participents:{$all:[senderId,userToChatId]}
        }).populate('messages');

        if(!conversations) return res.status(200).json([]);

        return res.status(200).json(conversations.message);
    } catch (error) {
        res.status(401).json({message:error.message});
    }
}
