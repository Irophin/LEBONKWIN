"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const quiz_1 = __importDefault(require("./routes/quiz"));
const api = (0, express_1.Router)();
api.use('/quiz', quiz_1.default);
api.get('/', (req, res) => {
    res.send('Basic API');
});
exports.default = api;
