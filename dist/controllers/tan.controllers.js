"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tanController = tanController;
const tan_handlers_1 = require("../handlers/tan.handlers");
async function tanController(req, res, next) {
    try {
        const id = Number(req.params.id);
        const result = await (0, tan_handlers_1.handleTan)(id);
        if (result.error) {
            res.status(result.status).json({ error: result.error });
        }
        else {
            res.status(result.status).json({ tan: result.data });
        }
    }
    catch (err) {
        next(err);
    }
}
