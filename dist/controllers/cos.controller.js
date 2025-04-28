"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cosController = cosController;
const cos_handler_1 = require("../handlers/cos.handler");
async function cosController(req, res) {
    const id = Number(req.params.id);
    const result = await (0, cos_handler_1.handleCos)(id);
    if (result.error) {
        return res.status(result.status).json({ error: result.error });
    }
    return res.status(result.status).json({ cos: result.data });
}
