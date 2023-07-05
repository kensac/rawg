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
exports.publishers = void 0;
const axios_1 = __importDefault(require("axios"));
const errorBase_1 = require("../errors/errorBase");
const utils_1 = require("../utils");
class publishers {
    constructor(rawg) {
        this.rawg = rawg;
    }
    getPublishers(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, "publishers", params))
                .then(res => {
                if (res.status == 200) {
                    return res.data;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("publishers", "getPublishers", err);
                throw error;
            });
        });
    }
    getPublisherDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, `publishers/${id}`))
                .then(res => {
                if (res.status == 200) {
                    return res.data;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("publishers", "getPublisherDetails", err);
                throw error;
            });
        });
    }
}
exports.publishers = publishers;
