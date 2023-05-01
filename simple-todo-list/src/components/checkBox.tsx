import React, { useEffect, useState } from "react";

type todo = {
  children: string;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  done: boolean;
};

function CheckBox({ children = "", onchange, checked, done = false }: todo) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => setIsChecked(checked), [checked]);
  return (
    <div>
      <label>
        <input
          disabled={done}
          type="checkbox"
          checked={isChecked}
          onChange={(event) => onchange(event)}
        />
        {children}
      </label>
    </div>
  );
}

export default CheckBox;
