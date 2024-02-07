/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { renderHook, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderWithClient, createWrapper } from "@/mocks/utils";
import useGetTodosQuery from "@/hooks/useGetTodosQuery";
import StarredPage from "./page";

const server = setupServer(
  rest.get("/api/getTodos", (req, res, ctx) => {
    return res(ctx.json([{ id: 1, title: "Test Todo" }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("StarredPage component", () => {
  it("renders loading state correctly", () => {
    renderWithClient(<StarredPage />);
    expect(screen.getByText("loading...")).toBeInTheDocument();
  });

  it("does not render todos when API call fails", async () => {
    server.use(
      rest.get("/api/getTodos", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    const { result } = renderHook(() => useGetTodosQuery(), {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(result.current.isSuccess).toBe(false));
    // Waiting for the request status to resolve as success, i.e: statusCode = 200
    expect(result.current.data).toStrictEqual(undefined);
  });
});
