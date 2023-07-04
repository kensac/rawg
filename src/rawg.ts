import { creatorRoles } from "./creatorRoles";
import { missingAPIKey } from "./errors/missingAPIKey";

export class rawg {
    readonly key: string
    public creatorRoles: creatorRoles
    baseUrl: string = "https://api.rawg.io/api/"

    constructor(key: string | undefined) {
        if (!key) {
            throw new missingAPIKey("No API key provided", `key entered is ${key}`);
        }
        this.key = key;
        this.creatorRoles = new creatorRoles(this);
    }

}