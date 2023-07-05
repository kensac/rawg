import { creatorRoles } from "./endpoints/creatorRoles";
import { missingAPIKey } from "./errors/missingAPIKey";
import { creators } from "./endpoints/creators";
import { games } from "./endpoints/games";
import { genres } from "./endpoints/genres";
import { platforms } from "./endpoints/platforms";
import { publishers } from "./endpoints/publishers";
import { stores } from "./endpoints/stores";

export class rawg {
    readonly key: string
    public creatorRoles: creatorRoles
    public creators: creators
    public games: games
    public genres: genres
    public platforms: platforms
    public publishers: publishers
    public stores: stores
    baseUrl: string = "https://api.rawg.io/api/"

    constructor(key: string | undefined) {
        if (!key) {
            throw new missingAPIKey("No API key provided", `key entered is ${key}`);
        }
        this.key = key;
        this.creatorRoles = new creatorRoles(this);
        this.creators = new creators(this);
        this.games = new games(this);
        this.genres = new genres(this);
        this.platforms = new platforms(this);
        this.publishers = new publishers(this);
        this.stores = new stores(this);
    }

}