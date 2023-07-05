import {rawg} from "../src/rawg";
import dotenv from "dotenv";
import { errorBase } from "../src/errors/errorBase";

dotenv.config();

const Client = new rawg(process.env.KEY)

test("Get Creator Roles", async () => {
    const res = await Client.creatorRoles.getCreatorRoles();
    expect(res).toBeDefined();
}
)

test("Get Creator Roles with params", async () => {
    const res = await Client.creatorRoles.getCreatorRoles({page_size: 20});
    expect(res).toBeDefined();
}
)

test("Get Creator Roles with params", async () => {
    try {
        await Client.creatorRoles.getCreatorRoles({page: -1});
    }
    catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
}
)