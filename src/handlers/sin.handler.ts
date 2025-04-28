import { getTriangleById } from '../db/fake/fake.service';
import type { HandlerResult } from './types/result';

export function handleSin(id: number): HandlerResult {
  const triangle = getTriangleById(id);
  if (!triangle) {
    return { status: 404, error: 'Triángulo no encontrado' };
  }
  return { status: 200, data: triangle.opposite / triangle.hypotenuse };
}