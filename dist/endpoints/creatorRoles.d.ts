import { rawg } from "../rawg";
interface creatorRolesParams {
    page?: number;
    page_size?: number;
}
export declare class creatorRoles {
    rawg: rawg;
    constructor(rawg: rawg);
    getCreatorRoles(params?: creatorRolesParams): Promise<any>;
}
export {};
