import {rawg} from "../src/rawg";

test("Key Error", () => {
    expect(() => {
        new rawg(undefined)
    }).toThrowError("No API key provided")
}
)