import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { addTodoVisibleState, incompleteTodoState } from "../states/todoList";

function AddTodo() {
  const [value, setValue] = useState("");
  const [incompletedList, setIncompledtedlist] =
    useRecoilState(incompleteTodoState);
  const [id, setId] = useState(incompletedList.length);
  const setAdd = useSetRecoilState(addTodoVisibleState);

  return (
    <div>
      <h2>새로운 Todo를 입력해주세요.</h2>
      <input
        type="text"
        placeholder="input Todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setIncompledtedlist([
              { name: value, checked: false, id },
              ...incompletedList,
            ]);
            setId(id + 1);
            setAdd(false);
          }
        }}
      />
    </div>
  );
}

export default AddTodo;
