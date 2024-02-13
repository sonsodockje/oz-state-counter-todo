import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  up: () => set((state) => ({ count: state.count + 1 })),
  down: () => set((state) => ({ count: state.count - 1 })),

  todos: [],
  addTodo: (test) => set((state) => ({ todos: [...state.todos, test] })),
}));
