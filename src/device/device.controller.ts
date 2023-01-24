import { Request, Response } from "express";
import DeviceData from "../models/data.model";
import XLSX from "xlsx";

const DeviceController = () => {};

DeviceController.getDeviceData = async (req: Request, res: Response) => {
  try {
    const { deviceId } = req.query;
    const deviceData = await DeviceData.find({ device: deviceId });
    res.status(200).json(deviceData);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

DeviceController.getPM1 = async (req: Request, res: Response) => {
  try {
    const { deviceId } = req.query;
    const deviceData = await DeviceData.find({ device: deviceId }, { p1: 1 });
    res.status(200).json(deviceData);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

DeviceController.getPM25 = async (req: Request, res: Response) => {
  try {
    const { deviceId } = req.query;
    const deviceData = await DeviceData.find({ device: deviceId }, { p25: 1 });
    res.status(200).json(deviceData);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

DeviceController.getPM10 = async (req: Request, res: Response) => {
  try {
    const { deviceId } = req.query;
    const deviceData = await DeviceData.find({ device: deviceId }, { p10: 1 });
    res.status(200).json(deviceData);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

DeviceController.filter = async (req: Request, res: Response) => {
  try {
    const startDate = req.body.startDate;
    const endDate = req.body?.endDate;
    const { deviceId } = req.query;
    const deviceData = await DeviceData.find({
      device: deviceId,
      t: {
        $gte: startDate,
        $lte: endDate,
      },
    });
    res.status(200).json(deviceData);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

DeviceController.upload = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file was uploaded.");
    }
    const workbook = XLSX.read(req.file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    const result = await DeviceData.insertMany(data);
    res.status(201).send("File Uploaded Successfully");
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export default DeviceController;
