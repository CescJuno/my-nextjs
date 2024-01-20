import { Todos } from "@/api/types";

async function GetTodos(queries: string): Promise<Todos> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?${queries}`,
    {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    },
  );
  if (!res.ok) throw new Error(`Error: ${res.status}`);
  return res.json();
}
export default GetTodos;
