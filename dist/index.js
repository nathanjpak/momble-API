"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./connection");
const routesV1_1 = require("./routesV1");
const PORT = 7174;
const app = (0, express_1.default)();
app.use(express_1.default.json());
(() => __awaiter(void 0, void 0, void 0, function* () {
    (0, connection_1.init)();
    app.listen(PORT, () => {
        console.log(`Server is connected at localhost ${PORT}`);
    });
    app.use("/api/v1", routesV1_1.routesV1);
    app.get("/", (req, res) => {
        res.send("Hello!");
    });
}))();
//# sourceMappingURL=index.js.map