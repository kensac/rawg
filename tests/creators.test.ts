import { rawg } from "../src/rawg";
import dotenv from "dotenv";
import { errorBase } from "../src/errors/errorBase";

dotenv.config();

const Client = new rawg(process.env.KEY)

test("Get Creators", async () => {
    const res = await Client.creators.getCreators();
    expect(res).toBeDefined();
}
)

test("Get Creators with params", async () => {
    const res = await Client.creators.getCreators({page_size: 20});
    expect(res).toBeDefined();
}
)

test("Get Creators with params Fail", async () => {
    try {
        await Client.creators.getCreators({page: -1});
    }
    catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
}
)

test("Get Creators Details", async () => {
    const res = await Client.creators.getCreatorsDetails(1);
    expect(res).toBeDefined();
}
)

test("Get Creators Details Fail", async () => {
    try {
        await Client.creators.getCreatorsDetails(-1);
    }
    catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
}
)