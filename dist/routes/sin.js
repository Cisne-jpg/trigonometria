"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sin_controller_1 = require("../controllers/sin.controller");
const router = (0, express_1.Router)();
router.get('/:id', sin_controller_1.sinController);
exports.default = router;
