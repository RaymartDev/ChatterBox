import express, { Response } from "express";

import MessageResponse from "../interfaces/MessageResponse";
import user from "./user";

const router = express.Router();

router.get("/", (req, res: Response<MessageResponse>) => {
  res.json({
    message: "ChatterBox version 1 API",
  });
});

router.use("/user", user);

export default router;
