"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cos_controller_1 = require("../controllers/cos.controller");
const router = (0, express_1.Router)();
router.get('/:id', cos_controller_1.cosController);
exports.default = router;
