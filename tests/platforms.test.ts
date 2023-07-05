import { rawg } from "../src/rawg";
import dotenv from "dotenv";
import { errorBase } from "../src/errors/errorBase";

dotenv.config();

const Client = new rawg(process.env.KEY);

test("Get Platforms", async () => {
    const res = await Client.platforms.getPlatforms();
    expect(res).toBeDefined();
    }
);

test("Get Platforms with params", async () => {
    const params = {
        page: 1,
        page_size: 5
    }
    const res = await Client.platforms.getPlatforms(params);
    expect(res).toBeDefined();
    }
);

test("Get Platforms with invalid params", async () => {
    const params = {
        page: -1
    }
    try {
        await Client.platforms.getPlatforms(params);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test("Get Platform Parent", async () => {
    const res = await Client.platforms.getPlatformParent();
    expect(res).toBeDefined();
    }
);

test("Get Platform Parent with params", async () => {
    const params = {
        page: 1,
        page_size: 5
    }
    const res = await Client.platforms.getPlatformParent(params);
    expect(res).toBeDefined();
    }
);

test("Get Platform Parent with invalid params", async () => {
    const params = {
        page: -1
    }
    try {
        await Client.platforms.getPlatformParent(params);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test("Get Platform Details", async () => {
    const res = await Client.platforms.getPlatformDetails(4);
    expect(res).toBeDefined();
    }
);

test("Get Platform Details with invalid id", async () => {
    try {
        await Client.platforms.getPlatformDetails(-1);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);
