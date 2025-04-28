import { Triangle } from '../../types/triangle';

const triangles: Triangle[] = [
  { id: 1, opposite: 3, adjacent: 4, hypotenuse: 5 },
  { id: 2, opposite: 5, adjacent: 12, hypotenuse: 13 },
  { id: 3, opposite: 8, adjacent: 15, hypotenuse: 17 },
];

export function getAllTriangles(): Triangle[] {
  return triangles;
}

export function getTriangleById(id: number): Triangle | undefined {
  return triangles.find(t => t.id === id);
}