import { Router } from "express";
import { authenticateUser } from "../middleware/auth";
import DeviceController from "./device.controller";
import multer from "multer";

const initDeviceRoutes = () => {
  const DeviceRouter: Router = Router();

  // Route to pull data for specific devices
  DeviceRouter.get("/", authenticateUser, DeviceController.getDeviceData);

  // Route to pull PM1 data from device
  DeviceRouter.get("/pm1", authenticateUser, DeviceController.getPM1);

  // Route to pull PM25 data from device
  DeviceRouter.get("/pm25", authenticateUser, DeviceController.getPM25);

  // Route to pull PM10 data from device
  DeviceRouter.get("/pm10", authenticateUser, DeviceController.getPM10);

  // Route to filter device data based on date
  DeviceRouter.post("/filter", authenticateUser, DeviceController.filter);

  DeviceRouter.post(
    "/upload",
    multer().single("file"),
    authenticateUser,
    DeviceController.upload
  );

  return DeviceRouter;
};

export default initDeviceRoutes;
