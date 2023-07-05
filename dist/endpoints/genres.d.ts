import { rawg } from "../rawg";
interface genresParams {
    page?: number;
    page_size?: number;
}
export declare class genres {
    rawg: rawg;
    constructor(rawg: rawg);
    getGenres(params?: genresParams): Promise<any>;
    getGenreDetails(id: number): Promise<any>;
}
export {};
