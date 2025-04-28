"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCos = handleCos;
const fake_service_1 = require("../db/fake/fake.service");
async function handleCos(id) {
    const tri = (0, fake_service_1.getTriangleById)(id);
    if (!tri) {
        return { status: 404, error: 'Triangle not found' };
    }
    const value = tri.adjacent / tri.hypotenuse;
    return { status: 200, data: value };
}
