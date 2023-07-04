"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rawg_1 = require("./rawg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Client = new rawg_1.rawg(process.env.KEY);
Client.creatorRoles.getCreatorRoles().then((data) => {
    console.log(data);
});
