import { http, HttpResponse } from "msw";
import people from "./dummy.json";
export const handlers = [
  //   http.get("/people", async ({ request }) => {
  //     const user = await request.json();
  //     return new Response(`Hello, ${user}`);
  //   }),
  http.get("/people", ({ request }) => {
    console.log(request);
    return HttpResponse.json(people);
  }),
  http.post("/add-people", async ({ request }) => {
    const res = await request.json();
    // const parsed = JSON.parse(res as string);
    console.log(res);
    return HttpResponse.json({});
  }),
];


