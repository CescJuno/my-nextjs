import { DomainRes } from "@/api/types";

async function GetTodos(queries: string): Promise<DomainRes> {
  const res = await fetch(`http://localhost:8081/v1/domains?${queries}`, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return res.json();
}
export default GetTodos;
