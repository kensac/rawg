import {rawg} from "./rawg";
import dotenv from "dotenv";

dotenv.config();

const Client = new rawg(process.env.KEY)
const params = {
    page: 1,
    page_size: 5,
    search: "Halo",
    search_precise: true,
    search_exact: true,
    parent_platforms: "1,2,3",
    platforms: "1,2,3",
    tags: 36890,
    platforms_count: 3,
    metacritic: 84,
    exclude_additions: true,
    exclude_parents: false,
    exclude_game_series: false,
    ordering: 'name' 
}

const res =  Client.games.getGames(params).then
    (res => {
            console.log(res.results);
    })