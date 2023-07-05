"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rawg = void 0;
const creatorRoles_1 = require("./endpoints/creatorRoles");
const missingAPIKey_1 = require("./errors/missingAPIKey");
const creators_1 = require("./endpoints/creators");
const games_1 = require("./endpoints/games");
const genres_1 = require("./endpoints/genres");
const platforms_1 = require("./endpoints/platforms");
const publishers_1 = require("./endpoints/publishers");
const stores_1 = require("./endpoints/stores");
const tags_1 = require("./endpoints/tags");
class rawg {
    constructor(key) {
        this.baseUrl = "https://api.rawg.io/api/";
        if (!key) {
            throw new missingAPIKey_1.missingAPIKey("No API key provided", `key entered is ${key}`);
        }
        this.key = key;
        this.creatorRoles = new creatorRoles_1.creatorRoles(this);
        this.creators = new creators_1.creators(this);
        this.games = new games_1.games(this);
        this.genres = new genres_1.genres(this);
        this.platforms = new platforms_1.platforms(this);
        this.publishers = new publishers_1.publishers(this);
        this.stores = new stores_1.stores(this);
        this.tags = new tags_1.tags(this);
    }
}
exports.rawg = rawg;
