import { rawg } from "../src/rawg";
import dotenv from "dotenv";
import { errorBase } from "../src/errors/errorBase";

dotenv.config();

const Client = new rawg(process.env.KEY);

test("Get Tags", async () => {
    const res = await Client.tags.getTags();
    expect(res).toBeDefined();
    }
);

test("Get Tags with params", async () => {
    const params = {
        page: 1,
        page_size: 5
    }
    const res = await Client.tags.getTags(params);
    expect(res).toBeDefined();
    }
);

test("Get Tags with invalid params", async () => {
    const params = {
        page: -1
    }
    try {
        await Client.tags.getTags(params);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test("Get Tag Details", async () => {
    const res = await Client.tags.getTagDetails(1);
    expect(res).toBeDefined();
    }
);

test("Get Tag Details with invalid id", async () => {
    try {
        await Client.tags.getTagDetails(-1);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);