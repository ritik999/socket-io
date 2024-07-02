import express from 'express';
import { login, logout, signup } from '../controllers/auth.controller';

const router=express.Router()

router.post('/login',login)
router.get('/logout',logout)
router.post('/signup',signup)

export {router as authRoutes}