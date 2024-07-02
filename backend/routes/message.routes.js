import {Router} from 'express'
import { sendMessage } from '../controllers/message.controller';
import { protectRoute } from '../middleware/protectRoute';
import { getMessage } from '@reduxjs/toolkit/dist/actionCreatorInvariantMiddleware';

const router=Router();

router.post('/send/:id',protectRoute,sendMessage);
router.get('/:id',protectRoute,getMessage)

export {router as messageRoute};