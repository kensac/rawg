"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorBase = void 0;
class errorBase extends Error {
    constructor(name, message, cause) {
        super();
        this.name = name;
        this.message = message;
        this.cause = cause;
    }
}
exports.errorBase = errorBase;
