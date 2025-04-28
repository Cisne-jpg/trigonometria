import type { Request, Response, NextFunction } from 'express';
import { handleSin } from '../handlers/sin.handler';

export const sinController = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const id = Number(req.params.id);
    const result = handleSin(id);

    if (result.error) {
      res.status(result.status).json({ error: result.error });
      return;
    }

    res.status(result.status).json({ sin: result.data });
    return;
  } catch (err) {
    next(err);
  }
};