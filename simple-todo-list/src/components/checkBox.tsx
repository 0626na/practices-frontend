import React, { useEffect, useState } from "react";

import { Todo, incompleteTodoState } from "../states/todoList";
import { useRecoilState } from "recoil";

type todo = {
  children: Todo;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

function CheckBox({ children, onchange, checked }: todo) {
  const [isChecked, setIsChecked] = useState(checked);
  const [incompletedList, setIncompledtedlist] =
    useRecoilState<Todo[]>(incompleteTodoState);

  useEffect(() => setIsChecked(checked), [checked]);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(event) => onchange(event)}
          className="mr-2 border-[#DADADA] rounded-md bg-gradient-to-r from-[#FCFCFC] to-[#F8F8F8] w-5 h-5
        "
        />
        <span>{children.name}</span>
      </div>
      {!children.checked && (
        <button
          onClick={() => {
            setIncompledtedlist(
              incompletedList.filter((item) => item !== children)
            );
            localStorage.setItem(
              "incompleteTodoList",
              JSON.stringify([
                ...incompletedList.filter((item) => item !== children),
              ])
            );
          }}
        >
          <img src="delete.png" alt="" className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default CheckBox;
