/* eslint-disable sort-imports */
import { Express } from "express";
import initDeviceRoutes from "../device/device.routes";
import initUserRoutes from "../user/user.routes";

const initRoutes = (app: Express) => {
  app.use("/user", initUserRoutes());
  app.use("/device", initDeviceRoutes());
  app.get("/", (req, res) => res.send("Serving Praan - backend API"));
};

export default initRoutes;
