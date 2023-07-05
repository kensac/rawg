import { rawg } from "../src/rawg";
import dotenv from "dotenv";
import { errorBase } from "../src/errors/errorBase";

dotenv.config();

const Client = new rawg(process.env.KEY);

test("Get Stores", async () => {
    const res = await Client.stores.getStores();
    expect(res).toBeDefined();
    }
);

test("Get Stores with params", async () => {
    const params = {
        page: 1,
        page_size: 5
    }
    const res = await Client.stores.getStores(params);
    expect(res).toBeDefined();
    }
);

test("Get Stores with invalid params", async () => {
    const params = {
        page: -1
    }
    try {
        await Client.stores.getStores(params);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test("Get Store Details", async () => {
    const res = await Client.stores.getStoreDetails(1);
    expect(res).toBeDefined();
    }
);
