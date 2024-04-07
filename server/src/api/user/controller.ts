import { NextFunction, Request, Response } from 'express';

export const sampleController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ message: 'User Routes' });
  } catch (err) {
    next(err);
  }
};