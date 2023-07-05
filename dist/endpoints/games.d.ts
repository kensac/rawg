import { rawg } from "../rawg";
interface getGamesParams {
    page?: number;
    page_size?: number;
    search?: string;
    search_precise?: boolean;
    search_exact?: boolean;
    parent_platforms?: string;
    platforms?: string;
    stores?: string;
    developers?: string;
    publishers?: string;
    genres?: string;
    tags?: string;
    creators?: string;
    dates?: string;
    updated?: string;
    platforms_count?: number;
    metacritic?: string;
    exclude_collection?: string;
    exclude_additions?: boolean;
    exclude_parents?: boolean;
    exclude_game_series?: boolean;
    ordering?: 'name' | 'released' | 'added' | 'created' | 'updated' | 'rating' | 'metacritic' | '-name' | '-released' | '-added' | '-created' | '-updated' | '-rating' | '-metacritic';
}
interface getGameAdditionParams {
    page?: number;
    page_size?: number;
}
export declare class games {
    rawg: rawg;
    constructor(rawg: rawg);
    getGames(params?: getGamesParams): Promise<any>;
    getGameAdditions(id: number, params?: getGameAdditionParams): Promise<any>;
    getCreators(gameId: string, params?: getGameAdditionParams): Promise<any>;
    getGameSeries(gameId: string, params?: getGameAdditionParams): Promise<any>;
    getParentGames(gameId: string, params?: getGameAdditionParams): Promise<any>;
    getScreenshots(gameId: string, params?: getGameAdditionParams): Promise<any>;
    getStores(gameId: string, params?: getGameAdditionParams): Promise<any>;
    getGameDetails(gameId: string): Promise<any>;
    getAchievements(gameId: string): Promise<any>;
    getTrailers(gameId: string): Promise<any>;
    getLatestRedditPosts(gameId: string): Promise<any>;
}
export {};
