import React from "react";
import tw from "tailwind-styled-components";
import CheckBox from "./components/checkBox";
import { useRecoilState } from "recoil";
import { completeTodoState, incompleteTodoState } from "./states/todoList";

function App() {
  const [incompletedList, setIncompledtedlist] =
    useRecoilState(incompleteTodoState);
  const [completedList, setCompletedList] = useRecoilState(completeTodoState);

  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const day = today.toLocaleString("default", { day: "numeric" });
  const year = today.toLocaleString("default", { year: "numeric" });

  return (
    <MainContainer>
      <HeaderContainer>
        <h2>
          {month} {day}, {year}
        </h2>
        <HeaderBottomBorder />
      </HeaderContainer>
      <IncompleteTodoList>
        <h2>Incomplete</h2>
        {incompletedList.map((todo, index) => (
          <CheckBox
            done={false}
            key={index}
            checked={todo.checked}
            onchange={(event) => {
              if (event.target.checked) {
                setIncompledtedlist(
                  incompletedList.filter((item) => item !== todo)
                );
                setCompletedList([
                  ...completedList,
                  { name: todo.name, checked: true },
                ]);
              }
            }}
          >
            {todo.name}
          </CheckBox>
        ))}
      </IncompleteTodoList>
      <CompleteTodoList>
        <h2>Completed</h2>
        {completedList.map((todo, index) => (
          <CheckBox done={true} checked={todo.checked} onchange={(event) => {}}>
            {todo.name}
          </CheckBox>
        ))}
      </CompleteTodoList>
    </MainContainer>
  );
}

const MainContainer = tw.div`
bg-slate-300
flex
flex-col
justify-center
w-full
items-center
`;

const HeaderContainer = tw.div``;

const HeaderBottomBorder = tw.div`
  border-b-2
`;

const IncompleteTodoList = tw.div`
m-3
`;

const CompleteTodoList = tw.div`
  m-3
`;

export default App;
