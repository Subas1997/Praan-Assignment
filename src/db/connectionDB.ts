import mongoose, { Connection } from "mongoose";
const dbconn: Connection = mongoose.createConnection(
  "mongodb+srv://subasgupta:NFcvtbbTV3s3iG0D@cluster0.ag3dvzq.mongodb.net/?retryWrites=true&w=majority"
);

dbconn.on("error", (err) => {
  console.log(`Error occured while connecting database`);
  throw new Error(`Db error occured ${err}`);
});

dbconn.once("open", () => {
  console.log(`Database connection successfull`);
});
export default dbconn;
