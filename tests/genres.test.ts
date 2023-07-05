import { rawg } from "../src/rawg";
import dotenv from "dotenv";
import { errorBase } from "../src/errors/errorBase";

dotenv.config();

const Client = new rawg(process.env.KEY);

test("Get Genres", async () => {
    const res = await Client.genres.getGenres();
    expect(res).toBeDefined();
    }
);

test("Get Genres with params", async () => {
    const params = {
        page: 1,
        page_size: 5
    }
    const res = await Client.genres.getGenres(params);
    expect(res).toBeDefined();
    }
);

test("Get Genres with invalid params", async () => {
    const params = {
        page: -1
    }
    try {
        await Client.genres.getGenres(params);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test("Get Genre Details", async () => {
    const res = await Client.genres.getGenreDetails(4);
    expect(res).toBeDefined();
    }
);

test("Get Genre Details with invalid id", async () => {
    try {
        await Client.genres.getGenreDetails(-1);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);