import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  up: () => set((state) => ({ count: state.count + 1 })),
  down: () => set((state) => ({ count: state.count - 1 })),

  user: {
    userId: "testididdid",
    userName: "홍길동",
  },
  addUser: ({ userId, userName }) =>
    set((state) => ({
      user: { ...state.user, userId, userName },
    })),

  todos: [],
  addTodo: (test) => set((state) => ({ todos: [...state.todos, test] })),
}));
