import { rawg } from "../src/rawg";
import dotenv from "dotenv";
import { errorBase } from "../src/errors/errorBase";

dotenv.config();

const Client = new rawg(process.env.KEY);

test("Get Games", async () => {
  const res = await Client.games.getGames();
  expect(res).toBeDefined();
});

test("Get Games with params", async () => {
  const params= {
    page: 1,
    page_size: 5,
    search: "Halo",
    search_precise: true,
    search_exact: true,
    parent_platforms: "1,2,3",
    platforms: "1,2,3",
    tags: '36890',
    platforms_count: 3,
    metacritic: '84',
    exclude_additions: true,
    exclude_parents: false,
    exclude_game_series: false,
    ordering: 'name' as const
  };

  const res = await Client.games.getGames(params);
  expect(res).toBeDefined();
});

test("Get Games with invalid params", async () => {
  const params = {
    page: -1,
  };
  try {
    await Client.games.getGames(params);
  } catch (e) {
    expect(e).toBeInstanceOf(errorBase);
  }
});

test("Get Game Editions", async () => {
    const res = await Client.games.getGameAdditions(3498);
    expect(res).toBeDefined();
    }
);

test("Get Game Editions with params", async () => {
    const params = {
        page: 1,
        page_size: 5
    }
    const res = await Client.games.getGameAdditions(3498, params);
    expect(res).toBeDefined();
    }
);

test("Get Game Editions with invalid params", async () => {
    const params = {
        page: -1
    }
    try {
        await Client.games.getGameAdditions(3498, params);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test("Get Creators", async () => {
    const res = await Client.games.getCreators("3498");
    expect(res).toBeDefined();
    }
);

test("Get Creators with params", async () => {
    const params = {
        page: 1,
        page_size: 5
    }
    const res = await Client.games.getCreators("3498", params);
    expect(res).toBeDefined();
    }
);

test("Get Creators with invalid params", async () => {
    const params = {
        page: -1
    }
    try {
        await Client.games.getCreators("3498", params);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test("get Game series", async () => {
    const res = await Client.games.getGameSeries("3498");
    expect(res).toBeDefined();
    }
);

test("get Game series with params", async () => {
    const params = {
        page: 1,
        page_size: 5
    }
    const res = await Client.games.getGameSeries("3498", params);
    expect(res).toBeDefined();
    }
);

test("get Game series with invalid params", async () => {
    const params = {
        page: -1
    }
    try {
        await Client.games.getGameSeries("3498", params);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test("get parent games", async () => {
    const res = await Client.games.getParentGames("3498");
    expect(res).toBeDefined();
    }
);

test("get parent games with params", async () => {
    const params = {
        page: 1,
        page_size: 5
    }
    const res = await Client.games.getParentGames("3498", params);
    expect(res).toBeDefined();
    }
);

test("get parent games with invalid params", async () => {
    const params = {
        page: -1
    }
    try {
        await Client.games.getParentGames("3498", params);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test("get game screenshots", async () => {
    const res = await Client.games.getScreenshots("3498");
    expect(res).toBeDefined();
    }
);

test("get game screenshots with params", async () => {
    const params = {
        page: 1,
        page_size: 5
    }
    const res = await Client.games.getScreenshots("3498", params);
    expect(res).toBeDefined();
    }
);

test("get game screenshots with invalid params", async () => {
    const params = {
        page: -1
    }
    try {
        await Client.games.getScreenshots("3498", params);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test("get game stores", async () => {
    const res = await Client.games.getStores("3498");
    expect(res).toBeDefined();
    }
);

test("get game stores with params", async () => {
    const params = {
        page: 1,
        page_size: 5
    }
    const res = await Client.games.getStores("3498", params);
    expect(res).toBeDefined();
    }
);

test("get game stores with invalid params", async () => {
    const params = {
        page: -1
    }
    try {
        await Client.games.getStores("3498", params);
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test("get game details", async () => {
    const res = await Client.games.getGameDetails("3498");
    expect(res).toBeDefined();
    }
);

test("get game details invalid", async () => {
    try {
        await Client.games.getGameDetails("-1");
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test("get game achievements", async () => {
    const res = await Client.games.getAchievements("3498");
    expect(res).toBeDefined();
    }
);

test("get game achievements invalid", async () => {
    try {
        await Client.games.getAchievements("-1");
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test('get game trailers', async () => {
    const res = await Client.games.getTrailers("3498");
    expect(res).toBeDefined();
    }
);

test('get game trailers invalid', async () => {
    try {
        await Client.games.getTrailers("-1");
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);

test('get latest reddit posts', async () => {
    const res = await Client.games.getLatestRedditPosts("3498");
    expect(res).toBeDefined();
    }
);

test('get latest reddit posts invalid', async () => {
    try {
        await Client.games.getLatestRedditPosts("-1");
    } catch (e) {
        expect(e).toBeInstanceOf(errorBase);
    }
    }
);
