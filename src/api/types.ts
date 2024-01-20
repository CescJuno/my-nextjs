export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface DomainRes {
  code: string;
  message?: string;
  timestamp?: number;
  data?: unknown;
}
export type Todos = Todo[] | [];
