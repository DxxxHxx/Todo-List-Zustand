export interface ITodo {
  id: number;
  content: string;
  status: TodoStatus;
}

export interface ITodoStore {
  todos: ITodo[];
  addTodo: (content: string) => void;
  removeTodo: (todoId: number) => void;
  setTodoStatus: (todoId: number, status: TodoStatus) => void;
  clearTodo: () => void;
}
export const TodoStatus = {
  Todo: "todo",
  Doing: "doing",
  Done: "done",
} as const;
export type TodoStatus = (typeof TodoStatus)[keyof typeof TodoStatus];
