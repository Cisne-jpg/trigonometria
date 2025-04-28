"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sinController = sinController;
const sin_handler_1 = require("../handlers/sin.handler");
async function sinController(req, res, next) {
    try {
        const id = Number(req.params.id);
        const result = await (0, sin_handler_1.handleSin)(id);
        if (result.error) {
            res.status(result.status).json({ error: result.error });
        }
        else {
            res.status(result.status).json({ sin: result.data });
        }
    }
    catch (err) {
        next(err);
    }
}
