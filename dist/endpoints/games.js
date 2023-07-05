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
exports.games = void 0;
const axios_1 = __importDefault(require("axios"));
const errorBase_1 = require("../errors/errorBase");
const utils_1 = require("../utils");
class games {
    constructor(rawg) {
        this.rawg = rawg;
    }
    getGames(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, "games", params))
                .then(res => {
                if (res.status == 200) {
                    return res.data;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("games", "getGames", err);
                throw error;
            });
        });
    }
    getGameAdditions(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, `games/${id}/additions`, params))
                .then(res => {
                if (res.status == 200) {
                    return res.data;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("games", "getGameAdditions", err);
                throw error;
            });
        });
    }
    getCreators(gameId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, `games/${gameId}/development-team`, params))
                .then(res => {
                if (res.status == 200) {
                    return res.data;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("games", "getCreators", err);
                throw error;
            });
        });
    }
    getGameSeries(gameId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, `games/${gameId}/game-series`, params))
                .then(res => {
                if (res.status == 200) {
                    return res.data;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("games", "getGameSeries", err);
                throw error;
            });
        });
    }
    getParentGames(gameId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, `games/${gameId}/parent-games`, params))
                .then(res => {
                if (res.status == 200) {
                    return res.data;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("games", "getParentGames", err);
                throw error;
            });
        });
    }
    getScreenshots(gameId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, `games/${gameId}/screenshots`, params))
                .then(res => {
                if (res.status == 200) {
                    return res.data;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("games", "getScreenshots", err);
                throw error;
            });
        });
    }
    getStores(gameId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, `games/${gameId}/stores`, params))
                .then(res => {
                if (res.status == 200) {
                    return res.data;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("games", "getStores", err);
                throw error;
            });
        });
    }
    getGameDetails(gameId) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, `games/${gameId}`))
                .then(res => {
                if (res.status == 200) {
                    return res.data;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("games", "getGameDetails", err);
                throw error;
            });
        });
    }
    getAchievements(gameId) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, `games/${gameId}/achievements`))
                .then(res => {
                if (res.status == 200) {
                    return res.data;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("games", "getAchievements", err);
                throw error;
            });
        });
    }
    getTrailers(gameId) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, `games/${gameId}/movies`))
                .then(res => {
                if (res.status == 200) {
                    return res.data.results;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("games", "getTrailers", err);
                throw error;
            });
        });
    }
    getLatestRedditPosts(gameId) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get((0, utils_1.urlBuilder)(this.rawg, `games/${gameId}/reddit`))
                .then(res => {
                if (res.status == 200) {
                    return res.data.results;
                }
            }).catch((err) => {
                let error = new errorBase_1.errorBase("games", "getLatestRedditPosts", err);
                throw error;
            });
        });
    }
}
exports.games = games;
