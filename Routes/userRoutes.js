import { Router } from "express";
import isValid from "../Middleware/isValid.js";
import userController from "../Controller/userController.js";

const userRouter = Router();
const UserController = new userController;

userRouter.post("/register",isValid, (req,res)=>UserController.registerUser(req,res));

export default userRouter;