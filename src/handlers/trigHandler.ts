import { Request, Response } from 'express';
import {
  computeSinValues,
  computeCosValues,
  computeTanValues
} from '../controllers/trigController';

import { Triangle } from '../types/triangle';

export const getSin = (_req: Request, res: Response) => {
  const results = computeSinValues(); 
  res.json(results);
};

export const getCos = (_req: Request, res: Response) => {
  const results = computeCosValues();  
  res.json(results);
};

export const getTan = (_req: Request, res: Response) => {
  const results = computeTanValues();  
  res.json(results);
};
