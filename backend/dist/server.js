"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const database_1 = require("./api/config/database");
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("./api"));
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', api_1.default);
(0, database_1.connection)().then(() => {
    server.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch((error) => {
    console.log(error);
});
