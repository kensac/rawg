import { rawg } from "../rawg";
interface rolesParams {
    page?: number;
    page_size?: number;
}
export declare class creators {
    rawg: rawg;
    constructor(rawg: rawg);
    getCreators(params?: rolesParams): Promise<any>;
    getCreatorsDetails(id: number): Promise<any>;
}
export {};
