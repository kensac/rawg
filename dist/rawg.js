"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rawg = void 0;
const creatorRoles_1 = require("./creatorRoles");
class rawg {
    constructor(key) {
        this.baseUrl = "https://api.rawg.io/api/";
        if (!key) {
            throw new Error("No API key provided");
        }
        this.key = key;
        this.creatorRoles = new creatorRoles_1.creatorRoles(this);
    }
}
exports.rawg = rawg;
