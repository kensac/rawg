import axios from "axios";
import { rawg } from "./rawg";
import { errorBase } from "./errors/errorBase";
import { urlBuilder } from "./utils";

export class creatorRoles {
    rawg: rawg;
    constructor(rawg: rawg) { 
        this.rawg = rawg;
    }

    async getCreatorRoles() {
        const response = await axios.get(urlBuilder(this.rawg, "creator-roles"));
        if (response.status !== 200) {
            throw new errorBase("getCreatorRoles", "Failed to get creator roles", response)
        }
        else {
            return response.data;
        }
    }
}