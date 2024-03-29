import request from "supertest";
import { app } from "../app";
import * as filmService from "../services/films";
import { FilmList } from "../types/films.types";

/**
 * these are film_controller tests that don't use mocks
 */

test("GET /film/trending should default to films for today", async () => {
    const res = await request(app).get("/film/trending");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("page", 1);
    expect(res.body).toHaveProperty("results");
    expect(res.body).toHaveProperty("total_pages");
    expect(res.body).toHaveProperty("total_results");
});

test("GET /film/trending/day/2 should get page 2 of films for today", async () => {
    const res = await request(app).get("/film/trending/day/2");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("page", 2);
    expect(res.body).toHaveProperty("results");
    expect(res.body).toHaveProperty("total_pages");
    expect(res.body).toHaveProperty("total_results");
});

test("GET /film/top_rated returns a list of films", async () => {
    const res = await request(app).get("/film/top_rated");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("page", 1);
    expect(res.body).toHaveProperty("results");
    expect(res.body).toHaveProperty("total_pages");
    expect(res.body).toHaveProperty("total_results");
});

test("GET /film/top_rated returns page 2 of films", async () => {
    const res = await request(app).get("/film/top_rated/2");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("page", 2);
    expect(res.body).toHaveProperty("results");
    expect(res.body).toHaveProperty("total_pages");
    expect(res.body).toHaveProperty("total_results");
});

test("GET /film/:id should get a single film", async () => {
    const res = await request(app).get("/film/995133");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("backdrop_path");
    expect(res.body).toHaveProperty("budget");
    expect(res.body).toHaveProperty("genres");
    expect(res.body).toHaveProperty("id", 995133);
});

test("GET /film/by_genre should get films for the given genres", async () => {
    const res = await request(app).get("/film/by_genre?genre_ids=16&page=1");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("page", 1);
    expect(res.body).toHaveProperty("results");
    expect(res.body).toHaveProperty("total_pages");
    expect(res.body).toHaveProperty("total_results");
    expect(res.body.results[0].genre_ids).toContain(16);
});