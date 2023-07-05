import { rawg } from "../rawg";
interface platformParams {
    page?: number;
    page_size?: number;
}
export declare class platforms {
    rawg: rawg;
    constructor(rawg: rawg);
    getPlatforms(params?: platformParams): Promise<any>;
    getPlatformParent(params?: platformParams): Promise<any>;
    getPlatformDetails(id: number): Promise<any>;
}
export {};
