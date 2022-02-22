import mongoose from "mongoose";
import { app } from "./app.js";
import "dotenv/config";

const db = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
mongoose.connect(db).then(console.log("Connected to db"));

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
