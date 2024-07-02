import { Router } from "express";
import { protectRoute } from "../middleware/protectRoute";

const router=Router();

router.get('/',protectRoute,getSidebarUsers);

export {router as userRouter};