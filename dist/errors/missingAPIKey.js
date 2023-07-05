"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missingAPIKey = void 0;
const errorBase_1 = require("./errorBase");
class missingAPIKey extends errorBase_1.errorBase {
    constructor(message, cause) {
        super("missingAPIKey", message, cause);
    }
}
exports.missingAPIKey = missingAPIKey;
