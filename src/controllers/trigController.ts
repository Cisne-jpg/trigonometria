import { Triangle } from '../types/triangle';
import { triangles } from '../db/randomTriangles';

export function computeSinValues(): Array<Triangle & { sin: number }> {
  return triangles.map(t => ({
    ...t,
    sin: t.opposite / t.hypotenuse
  }));
}

export function computeCosValues(): Array<Triangle & { cos: number }> {
  return triangles.map(t => ({
    ...t,
    cos: t.adjacent / t.hypotenuse
  }));
}

export function computeTanValues(): Array<Triangle & { tan: number }> {
  return triangles.map(t => ({
    ...t,
    tan: t.opposite / t.adjacent
  }));
}
