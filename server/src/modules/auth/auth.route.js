import { Router } from "express";
import authController from "./auth.controller.js";

const authRouter = Router();

authRouter.post(
  "/auth/admin/signin",
  authController.adminSignIn
);  

authRouter.post(
  "/auth/customer/signin",
  authController.customerSignIn
);  



export default authRouter