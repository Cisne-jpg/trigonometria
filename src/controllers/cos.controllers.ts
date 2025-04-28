import type { Request, Response, NextFunction } from 'express';
import { handleCos } from '../handlers/cos.handler';

export const cosController = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const id = Number(req.params.id);
    const result = handleCos(id);

    if (result.error) {
      res.status(result.status).json({ error: result.error });
      return;
    }

    res.status(result.status).json({ cos: result.data });
    return;
  } catch (err) {
    next(err);
  }
};