import type { Request, Response, NextFunction } from 'express';
import { handleTan } from '../handlers/tan.handler';

export const tanController = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const id = Number(req.params.id);
    const result = handleTan(id);

    if (result.error) {
      res.status(result.status).json({ error: result.error });
      return;
    }

    res.status(result.status).json({ tan: result.data });
    return;
  } catch (err) {
    next(err);
  }
};