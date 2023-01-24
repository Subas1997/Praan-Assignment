import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user.model";
import { JWT_VERIFY } from "../utils/error.constant";
import { User } from "../utils/types";
const jwt = require("jsonwebtoken");

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authToken = req.headers["authorization"];
    if (!authToken) {
      return res.status(403).json({
        message: JWT_VERIFY.FORBIDDEN_ERROR,
      });
    }
    const userData = await jwt.verify(authToken, process.env.JWT_SECRET_KEY);
    const user: User | any = await UserModel.findOne({ email: userData.email });
    if (!user) throw new Error(`Invalid token: ${JWT_VERIFY.USER_NOT_FOUND}`);
    next()
  } catch (error) {
    return error;
  }
};
