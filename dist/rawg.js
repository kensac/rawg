"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rawg = void 0;
const creatorRoles_1 = require("./endpoints/creatorRoles");
const missingAPIKey_1 = require("./errors/missingAPIKey");
const creators_1 = require("./endpoints/creators");
class rawg {
    constructor(key) {
        this.baseUrl = "https://api.rawg.io/api/";
        if (!key) {
            throw new missingAPIKey_1.missingAPIKey("No API key provided", `key entered is ${key}`);
        }
        this.key = key;
        this.creatorRoles = new creatorRoles_1.creatorRoles(this);
        this.creators = new creators_1.creators(this);
    }
}
exports.rawg = rawg;
