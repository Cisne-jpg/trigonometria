"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sin_1 = __importDefault(require("./routes/sin"));
const cos_1 = __importDefault(require("./routes/cos"));
const tan_1 = __importDefault(require("./routes/tan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/sin', sin_1.default);
app.use('/api/cos', cos_1.default);
app.use('/api/tan', tan_1.default);
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
