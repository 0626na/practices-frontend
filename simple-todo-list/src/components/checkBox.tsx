import React, { useEffect, useState } from "react";

import { Todo } from "../states/todoList";

type todo = {
  children: Todo;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

function CheckBox({ children, onchange, checked }: todo) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => setIsChecked(checked), [checked]);
  return (
    <div className="flex items-center">
      <label className="text-[#575767] font-medium">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(event) => onchange(event)}
          className="mr-2 border-[#DADADA] rounded-md bg-gradient-to-r from-[#FCFCFC] to-[#F8F8F8] w-5 h-5
        "
        />
        {children.name}
      </label>
    </div>
  );
}

export default CheckBox;
