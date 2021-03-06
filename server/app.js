import express from "express";
import morgan from "morgan";
import { handleGlobalError } from "./controllers/errorcontroller.js";
import placeRouter from "./routes/placeroute.js";
import AppError from "./utils/apperror.js";
import userRouter from "./routes/userroute.js";

export const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//setting headers to response
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

//routes
app.use("/api/places", placeRouter);
app.use("/api/users", userRouter);

//no page found error
app.all("*", (req, res, next) => {
  next(new AppError(`cant find ${req.originalUrl}`, 404));
});

//error handling middleware
app.use(handleGlobalError);
