"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tan_controller_1 = require("../controllers/tan.controller");
const router = (0, express_1.Router)();
router.get('/:id', tan_controller_1.tanController);
exports.default = router;
