"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signale_1 = require("signale");
const express_1 = __importDefault(require("express"));
const ProductRouter_1 = require("./movimiento/infrastructure/ProductRouter");
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
app.use(express_1.default.json());
app.use("/movimiento", ProductRouter_1.movimientoRouter);
const port = 3004;
app.listen(port, () => {
    signale.success("Server online in port 3004");
});
