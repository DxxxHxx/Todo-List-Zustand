import { ITodoStore, TodoStatus } from "@/types/interface";
import { createSelectors } from "@/utils/createSelectors";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const todoStore = create<ITodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (content) =>
        set((prev) => ({
          todos: [
            ...prev.todos,
            { id: Date.now(), content, status: TodoStatus.Todo },
          ],
        })),
      removeTodo: (todoId) =>
        set((prev) => ({
          todos: prev.todos.filter((item) => item.id !== todoId),
        })),
      setTodoStatus: (todoId, status) =>
        set((prev) => ({
          todos: prev.todos.map((item) => {
            if (item.id === todoId) {
              return {
                ...item,
                status: status,
              };
            } else {
              return {
                ...item,
              };
            }
          }),
        })),
      clearTodo: () => set({ todos: [] }),
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useTodoStore = createSelectors(todoStore);
