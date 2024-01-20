import { rest } from "msw";
import { Todos } from "@/api/types";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos/*", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Todos>([
        { id: 123, userId: 333, title: `test`, completed: false },
      ]),
    );
  }),
];
