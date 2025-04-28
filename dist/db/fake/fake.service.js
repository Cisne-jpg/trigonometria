"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTriangles = getAllTriangles;
exports.getTriangleById = getTriangleById;
const triangles = [
    { id: 1, opposite: 3, adjacent: 4, hypotenuse: 5 },
    { id: 2, opposite: 5, adjacent: 12, hypotenuse: 13 },
    { id: 3, opposite: 8, adjacent: 15, hypotenuse: 17 },
];
function getAllTriangles() {
    return triangles;
}
function getTriangleById(id) {
    return triangles.find(t => t.id === id);
}
