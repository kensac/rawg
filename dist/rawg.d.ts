import { creatorRoles } from "./endpoints/creatorRoles";
import { creators } from "./endpoints/creators";
export declare class rawg {
    readonly key: string;
    creatorRoles: creatorRoles;
    creators: creators;
    baseUrl: string;
    constructor(key: string | undefined);
}
