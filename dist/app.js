"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const NotFound_1 = __importDefault(require("./app/middelwares/NotFound"));
const indes_1 = __importDefault(require("./app/routes/indes"));
const GlobalErrorHandler_1 = __importDefault(require("./app/middelwares/GlobalErrorHandler"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("", indes_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to our Ticket management system project...');
});
app.listen(port, () => {
    console.log(`Ticket management sysetem listening on port ${port}`);
});
app.use(GlobalErrorHandler_1.default);
app.use(NotFound_1.default);
exports.default = app;
