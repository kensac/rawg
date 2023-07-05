import { rawg } from "../rawg";
interface storesParams {
    page?: number;
    page_size?: number;
}
export declare class stores {
    rawg: rawg;
    constructor(rawg: rawg);
    getStores(params?: storesParams): Promise<any>;
    getStoreDetails(id: number): Promise<any>;
}
export {};
