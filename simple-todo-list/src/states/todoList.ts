import { atom } from "recoil";

export type Todo = {
  checked: boolean;
  name: string;
  id: number;
};

const incompleteTodoList = localStorage.getItem("incompleteTodoList");
const completeTodoList = localStorage.getItem("completeTodoList");

export const incompleteTodoState = atom<Todo[]>({
  key: "incomplete_todolist",
  default: incompleteTodoList ? JSON.parse(incompleteTodoList) : [],
});

export const completeTodoState = atom<Todo[]>({
  key: "complete_todolist",
  default: completeTodoList ? JSON.parse(completeTodoList) : [],
});

export const addTodoVisibleState = atom({
  key: "visible_addTodo",
  default: false,
});
