import express from 'express';
import dotenv from 'dotenv';
import { authRoutes } from './routes/auth.routes';
import cookieParser from 'cookie-parser';
import { messageRoute } from './routes/message.routes';
import { userRouter } from './routes/user.routes';

const app=express();
const port=process.env.PORT || 8000;
dotenv.config();

// app.get('/',(req,res)=>{
//     res.send('Hellow');
// })
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoute)
app.use('/api/users',userRouter)

app.listen(port,()=>{
    console.log(`app running on port: ${port}`);
})