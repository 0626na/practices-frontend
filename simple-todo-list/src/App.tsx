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
    <BackGroundContainer>
      <MainContainer>
        <HeaderContainer>
          <h2 className="font-bold text-4xl ">
            {month} {day}, {year}
          </h2>
          <h3 className="mt-2 text-[#575767] text-sm font-semibold">
            {incompletedList.length} incomplete, {completedList.length}{" "}
            completed
          </h3>
          <HeaderBottomBorder />
        </HeaderContainer>
        <IncompleteTodoList>
          <h2 className="text-[#575767] text-lg font-bold">Incomplete</h2>
          {incompletedList.map((todo, index) => (
            <CheckBox
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
          <h2 className="text-[#575767] text-lg font-bold">Completed</h2>
          {completedList.map((todo, index) => (
            <CheckBox
              checked={todo.checked}
              onchange={(event) => {
                if (!event.target.checked) {
                  setCompletedList(
                    completedList.filter((item) => item !== todo)
                  );
                  setIncompledtedlist([
                    { name: todo.name, checked: false },
                    ...incompletedList,
                  ]);
                }
              }}
            >
              {todo.name}
            </CheckBox>
          ))}
        </CompleteTodoList>
      </MainContainer>
    </BackGroundContainer>
  );
}

const BackGroundContainer = tw.div`
flex
justify-center
h-screen
items-center
`;

const MainContainer = tw.div`
  w-96
  h-[500px]
  flex
  flex-col
  p-6
  m-4
  shadow-md
  rounded-xl
  overflow-y-scroll
`;

const HeaderContainer = tw.div``;

const HeaderBottomBorder = tw.div`
  border-b-2
  my-4
  opacity-20	
`;

const IncompleteTodoList = tw.div`

`;

const CompleteTodoList = tw.div`
  
`;

export default App;
