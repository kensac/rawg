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
exports.creatorRoles = void 0;
const axios_1 = __importDefault(require("axios"));
const errorBase_1 = require("./errors/errorBase");
const utils_1 = require("./utils");
class creatorRoles {
    constructor(rawg) {
        this.rawg = rawg;
    }
    getCreatorRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, "creator-roles"));
            if (response.status !== 200) {
                throw new errorBase_1.errorBase("getCreatorRoles", "Failed to get creator roles", response);
            }
            else {
                return response.data;
            }
        });
    }
}
exports.creatorRoles = creatorRoles;
