import { rawg } from "../src/rawg";
import dotenv from "dotenv";
import { errorBase } from "../src/errors/errorBase";

dotenv.config();

const Client = new rawg(process.env.KEY);

test("Get Publishers", async () => {
    const res = await Client.publishers.getPublishers();
    expect(res).toBeDefined();
    }
);

test("Get Publishers with params", async () => {
    const params = {
        page: 1,
        page_size: 5
    }
    const res = await Client.publishers.getPublishers(params);
    expect(res).toBeDefined();
    }
);

test("Get Publishers with invalid params", async () => {
    const params = {
        page: -1
    }
    try {
        await Client.publishers.getPublishers(params);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test("Get Publisher Details", async () => {
    const res = await Client.publishers.getPublisherDetails(4);
    expect(res).toBeDefined();
    }
);

test("Get Publisher Details with invalid id", async () => {
    try {
        await Client.publishers.getPublisherDetails(-1);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);
