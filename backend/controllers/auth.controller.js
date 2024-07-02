import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken";

export const login = async(req, res) => {
  const {username,password}=req.body;
  const user=await User.findOne(username);

  const isCorrectPassword=await bcrypt.compare(password,user?.password);

  if(!user || !isCorrectPassword){
    return res.status(400).json({message:'invalid credientials'});
  }

  generateTokenAndSetCookie(user._id,res);

  res.status(201).json({message:'loged in'});
};

export const logout = (req, res) => {
  try {
    res.cookie('jwt',"",{maxAge:0});
  } catch (error) {
    console.log('error:',error.message);
  }
};

export const signup = async (req, res) => {
  try {
    const { username, fullname, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password do not match" });
    }

    const user = await User.findOne(username);
    if (user) {
      return res.status(400).json({ message: "user already available" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullname,
      username,
      password: hashPassword,
      gender,
    });

    const userData = await newUser.save();

    if (userData) {
        generateTokenAndSetCookie(userData._id,res);
      res.status(201).json({ message: "user created" });
    } else {
      res.status(400).json({ message: "invalid json data" });
    }
  } catch (error) {
    console.log("the error is: ", error.message);
  }
};
