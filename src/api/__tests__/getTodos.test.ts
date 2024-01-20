/**
 * @jest-environment node
 */

import { rest } from "msw";
import { Todos } from "@/api/types";
import { server } from "@/mocks/server";
import getTodos from "@/api/getTodos";

describe("getTodos function", () => {
  it("returns todos when the response is ok", async () => {
    const mockTodos: Todos = [
      { id: 1, userId: 0, title: "Todo 1", completed: false },
      { id: 2, userId: 1, title: "Todo 2", completed: true },
    ];

    server.use(
      rest.get(
        `https://jsonplaceholder.typicode.com/todos`,
        (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockTodos));
        },
      ),
    );

    const response = await getTodos(``);
    expect(response).toEqual(mockTodos);
  });

  it("throws an error when the response is not ok", async () => {
    server.use(
      rest.get(
        `https://jsonplaceholder.typicode.com/todos`,
        (req, res, ctx) => {
          return res(ctx.status(400));
        },
      ),
    );

    await expect(getTodos(``)).rejects.toThrow("Error: 400");
  });

  it("sends the correct query parameters", async () => {
    const mockTodos: Todos = [
      { id: 1, userId: 0, title: "Todo 1", completed: false },
      { id: 2, userId: 1, title: "Todo 2", completed: true },
    ];

    server.use(
      rest.get(
        `https://jsonplaceholder.typicode.com/todos`,
        (req, res, ctx) => {
          if (req.url.searchParams.get("completed") === "true") {
            return res(
              ctx.status(200),
              ctx.json(mockTodos.filter((todo) => todo.completed)),
            );
          }
          return res(ctx.status(400));
        },
      ),
    );

    const response = await getTodos(`completed=true`);
    expect(response).toEqual(mockTodos.filter((todo) => todo.completed));
  });
});
