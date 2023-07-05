import {rawg} from "../src/rawg";
import dotenv from "dotenv";

dotenv.config();

test("Key Error", () => {
    expect(() => {
        new rawg(undefined)
    }).toThrowError("No API key provided")
}
)

test("Succesful rawg instance", () => {
    const instance = new rawg(process.env.KEY)
    expect(instance.key).toBe(process.env.KEY)
    expect(instance.baseUrl).toBe("https://api.rawg.io/api/")
}
)