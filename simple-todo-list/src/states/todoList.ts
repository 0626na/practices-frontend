import { atom } from "recoil";

type Todo = {
  checked: boolean;
  name: string;
};

export const incompleteTodoState = atom<Todo[]>({
  key: "incomplete_todolist",
  default: [
    { name: "닐스", checked: false },
    { name: "날스", checked: false },
    { name: "도리돌", checked: false },
    { name: "닐스", checked: false },
    { name: "날스", checked: false },
    { name: "도리돌", checked: false },
    { name: "닐스", checked: false },
    { name: "날스", checked: false },
    { name: "도리돌", checked: false },
    { name: "닐스", checked: false },
    { name: "날스", checked: false },
    { name: "도리돌", checked: false },
    { name: "닐스", checked: false },
    { name: "날스", checked: false },
    { name: "도리돌", checked: false },
    { name: "닐스", checked: false },
    { name: "날스", checked: false },
    { name: "도리돌", checked: false },
    { name: "닐스", checked: false },
    { name: "날스", checked: false },
    { name: "도리돌", checked: false },
    { name: "닐스", checked: false },
    { name: "날스", checked: false },
    { name: "도리돌", checked: false },
    { name: "닐스", checked: false },
    { name: "날스", checked: false },
    { name: "도리돌", checked: false },
    { name: "닐스", checked: false },
    { name: "날스", checked: false },
    { name: "도리돌", checked: false },
    { name: "닐스", checked: false },
    { name: "날스", checked: false },
    { name: "도리돌", checked: false },
    { name: "닐스", checked: false },
    { name: "날스", checked: false },
    { name: "도리돌", checked: false },
    { name: "닐스", checked: false },
    { name: "날스", checked: false },
    { name: "도리돌", checked: false },
    { name: "닐스", checked: false },
    { name: "날스", checked: false },
    { name: "도리돌", checked: false },
  ],
});

export const completeTodoState = atom<Todo[]>({
  key: "complete_todolist",
  default: [],
});
