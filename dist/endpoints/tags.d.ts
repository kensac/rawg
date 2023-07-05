import { rawg } from "../rawg";
interface tagsParams {
    page?: number;
    page_size?: number;
}
export declare class tags {
    rawg: rawg;
    constructor(rawg: rawg);
    getTags(params?: tagsParams): Promise<any>;
    getTagDetails(id: number): Promise<any>;
}
export {};
