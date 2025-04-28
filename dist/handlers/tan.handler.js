"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleTan = handleTan;
const fake_service_1 = require("../db/fake/fake.service");
async function handleTan(id) {
    const tri = (0, fake_service_1.getTriangleById)(id);
    if (!tri) {
        return { status: 404, error: 'Triangle not found' };
    }
    const value = tri.opposite / tri.adjacent;
    return { status: 200, data: value };
}
