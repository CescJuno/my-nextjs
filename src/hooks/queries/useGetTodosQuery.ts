"use client";

import { useQuery } from "@tanstack/react-query";
import GetData from "@/api/getTodos";
import { useSearchParams } from "next/navigation";
import { Todos } from "@/api/types";

export type QueryKeyType = {
  q?: string;
  sort?: string;
  active?: boolean;
  pending?: boolean;
  stop?: boolean;
  expired?: boolean;
};

export default function useGetTodosQuery() {
  const searchParams = useSearchParams();
  return useQuery<Todos>({
    queryKey: ["todos", `${searchParams?.toString() || ``}`],
    queryFn: async () => GetData(searchParams?.toString() || ``),
  });
}
