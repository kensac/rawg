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
exports.stores = void 0;
const axios_1 = __importDefault(require("axios"));
const errorBase_1 = require("../errors/errorBase");
const utils_1 = require("../utils");
class stores {
    constructor(rawg) {
        this.rawg = rawg;
    }
    getStores(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, "stores", params))
                .then(res => {
                if (res.status == 200) {
                    return res.data;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("stores", "getStores", err);
                throw error;
            });
        });
    }
    getStoreDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, `stores/${id}`))
                .then(res => {
                if (res.status == 200) {
                    return res.data;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("stores", "getStoreDetails", err);
                throw error;
            });
        });
    }
}
exports.stores = stores;
