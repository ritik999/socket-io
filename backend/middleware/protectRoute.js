import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { User } from '../models/user.model';

export const protectRoute=async(req,res,next)=>{
   try {
     const token=req.cookies.jwt;
 
     if(!token){
         return res.status(400).json({message:'unauthorized'});
     }
 
     const decode=jwt.verify(token,process.env.JWT_SECRET);
 
     if(!decode){
         return res.status(401).json({message:'invalid token'});
     }
     const user=await User.findById(decode.id).select('-password');
 
     req.user=user;
     next();
   } catch (error) {
     return res.status(401).json({message:error.message})
   }

}