import { Schema } from "mongoose";
import dbconn from "../db/connectionDB";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 200,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = dbconn.model("user", UserSchema);
export default UserModel;
