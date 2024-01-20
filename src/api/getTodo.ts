import { Todo } from "@/api/types";

async function GetTodo(id: string): Promise<Todo> {
  const res = await (
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      cache: "no-store",
    })
  ).json();
  return res;
}
export default GetTodo;
