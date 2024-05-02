import { Request } from "express";

export default interface ValidatedRequest extends Request {
  user?: {
    id: string;
    username: string;
    email: string;
  };
}
