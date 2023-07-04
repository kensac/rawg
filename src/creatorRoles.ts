import axios from "axios";
import { rawg } from "./rawg";

export class creatorRoles {
    rawg: rawg;
    constructor(rawg: rawg) { 
        this.rawg = rawg;
    }

    async getCreatorRoles() {
        const response = await axios.get(`${this.rawg.baseUrl}creator-roles?key=${this.rawg.key}`);
        return response;
    }
}