import { User } from "./types";

const jwt = require("jsonwebtoken");

export const generateAuthToken = (user: User) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ _id: user._id, email: user.email }, jwtSecretKey);
  return token;
};
