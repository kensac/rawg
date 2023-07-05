import { creatorRoles } from "./endpoints/creatorRoles";
import { missingAPIKey } from "./errors/missingAPIKey";
import { creators } from "./endpoints/creators";

export class rawg {
    readonly key: string
    public creatorRoles: creatorRoles
    public creators: creators
    baseUrl: string = "https://api.rawg.io/api/"

    constructor(key: string | undefined) {
        if (!key) {
            throw new missingAPIKey("No API key provided", `key entered is ${key}`);
        }
        this.key = key;
        this.creatorRoles = new creatorRoles(this);
        this.creators = new creators(this);
    }

}