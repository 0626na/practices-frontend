import { atom } from "recoil";

export type Todo = {
  checked: boolean;
  name: string;
  id: number;
};

export const incompleteTodoState = atom<Todo[]>({
  key: "incomplete_todolist",
  default: [],
});

export const completeTodoState = atom<Todo[]>({
  key: "complete_todolist",
  default: [],
});
