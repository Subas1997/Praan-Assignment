import express, { Express } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import dbconn from "../db/connectionDB";
import initRoutes from "../routes/route";

const app: Express = express();
app.use(cors());
app.use(express.json());

console.assert(dbconn);
dotenv.config();
initRoutes(app);

app.listen(process.env.PORT_NUMBER, async () => {
  console.log(`API Server Running at Port Number ${process.env.PORT_NUMBER}`);
});
