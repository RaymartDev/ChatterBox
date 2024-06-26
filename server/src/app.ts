import express, { Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

import * as GeneralMiddleware from "./middleware/general";
import api from "./api";
import MessageResponse from "./interfaces/MessageResponse";

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(express.json());

// rules of API
app.use((req, res, next) => {
  // remove in production
  res.header("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
    return res.status(200).json({ message: "hi" });
  }

  next();
});

app.get("/", (_req, res: Response<MessageResponse>) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", api);

app.use(GeneralMiddleware.notFound);
app.use(GeneralMiddleware.errorHandler);

export default app;
