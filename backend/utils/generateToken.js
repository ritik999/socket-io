import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'2d'
    });

    res.cookie('jwt',token,{
        maxAge:10*24*60*60*1000,
        httpOnly:true,
        sameSize:'strict'
    })
}