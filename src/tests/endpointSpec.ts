import supertest from "supertest";
import app from "..";

const req = supertest(app);
describe("Test endpoint responses", () => {
  it("gets the responses status OK", async () => {
    const response = await req.get(
      "/api/images?filename=chart&width=300&height=300",
    );
    expect(response.status).toBe(200);
  });
  it("gets the responses status Bad Request", async () => {
    const response = await req.get(
      "/api/images?filename=chart&width=300&height=300a",
    );
    expect(response.status).toBe(400);
  });
});
