import request from "supertest";
import { app } from "../app";

test("GET / should return app home page", async () => {
    const res = await request(app)
        .get("/");

    // not sure what home page will be yet
    expect(res.statusCode).toEqual(200);
});