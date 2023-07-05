import { rawg } from "../rawg";
interface publishersParams {
    page?: number;
    page_size?: number;
}
export declare class publishers {
    rawg: rawg;
    constructor(rawg: rawg);
    getPublishers(params?: publishersParams): Promise<any>;
    getPublisherDetails(id: number): Promise<any>;
}
export {};
