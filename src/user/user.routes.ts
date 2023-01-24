import { Router } from "express";
import userController from "./user.controller";

const initUserRoutes = () => {
  const userRouter: Router = Router();
  userRouter.post("/login", userController.login);
  userRouter.post("/register", userController.register);
  return userRouter;
};

export default initUserRoutes;
