import { Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import ValidatedRequest from "../interfaces/ValidatedRequest";

export function authenticate(
  req: ValidatedRequest,
  res: Response,
  next: NextFunction
) {
  const { ACCESS_TOKEN_SECRET } = process.env;

  try {
    const token =
      req.headers.authorization?.split(" ")[1] || req.cookies.auth_token;
    const decode = jwt.verify(token, ACCESS_TOKEN_SECRET as string);
    const user = (decode as JwtPayload)?.user;
    // TODO check if user exist in db or something idk
    req.user = user;
    next();
  } catch {
    res.status(404).json({
      error: new Error("Invalid Request"),
    });
  }
}
