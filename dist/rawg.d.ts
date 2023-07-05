import { creatorRoles } from "./endpoints/creatorRoles";
import { creators } from "./endpoints/creators";
import { games } from "./endpoints/games";
import { genres } from "./endpoints/genres";
import { platforms } from "./endpoints/platforms";
import { publishers } from "./endpoints/publishers";
import { stores } from "./endpoints/stores";
import { tags } from "./endpoints/tags";
export declare class rawg {
    readonly key: string;
    creatorRoles: creatorRoles;
    creators: creators;
    games: games;
    genres: genres;
    platforms: platforms;
    publishers: publishers;
    stores: stores;
    tags: tags;
    baseUrl: string;
    constructor(key: string | undefined);
}
