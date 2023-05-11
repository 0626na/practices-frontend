import React from "react";
import tw from "tailwind-styled-components";
import CheckBox from "./components/checkBox";
import { useRecoilState } from "recoil";
import {
  addTodoVisibleState,
  completeTodoState,
  incompleteTodoState,
} from "./states/todoList";
import AddTodo from "./components/addTodo";

function App() {
  const [incompletedList, setIncompledtedlist] =
    useRecoilState(incompleteTodoState);
  const [completedList, setCompletedList] = useRecoilState(completeTodoState);

  const [bAdd, setAdd] = useRecoilState(addTodoVisibleState);

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
          <h3 className="pt-2 text-[#575767] text-sm font-semibold">
            {incompletedList.length} incomplete, {completedList.length}{" "}
            completed
          </h3>
          <HeaderBottomBorder />
        </HeaderContainer>
        <div className="overflow-auto h-full">
          <IncompleteTodoList>
            <h2 className="text-[#575767] text-lg font-bold">Incomplete</h2>
            {incompletedList.length !== 0 ? (
              incompletedList.map((todo, index) => (
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
                        {
                          ...todo,
                          checked: true,
                          id: completedList.length + 1,
                        },
                      ]);

                      localStorage.setItem(
                        "incompleteTodoList",
                        JSON.stringify([
                          ...incompletedList.filter((item) => item !== todo),
                        ])
                      );

                      //completedList key를 가진 localStorage에 todo를 추가
                      localStorage.setItem(
                        "completeTodoList",
                        JSON.stringify([
                          ...completedList,
                          {
                            ...todo,
                            checked: true,
                            id: incompletedList.length + 1,
                          },
                        ])
                      );
                    }
                  }}
                >
                  {todo}
                </CheckBox>
              ))
            ) : (
              <h3>All Clear!</h3>
            )}
          </IncompleteTodoList>
          <CompleteTodoList>
            {!!completedList.length && (
              <h2 className="text-[#575767] text-lg font-bold mt-4">
                Completed
              </h2>
            )}
            {completedList.map((todo, index) => (
              <CheckBox
                key={index}
                checked={todo.checked}
                onchange={(event) => {
                  if (!event.target.checked) {
                    setCompletedList(
                      completedList.filter((item) => item !== todo)
                    );
                    setIncompledtedlist([
                      {
                        ...todo,
                        checked: false,
                        id: incompletedList.length + 1,
                      },
                      ...incompletedList,
                    ]);

                    localStorage.setItem(
                      "completeTodoList",
                      JSON.stringify([
                        ...completedList.filter((item) => item !== todo),
                      ])
                    );

                    localStorage.setItem(
                      "incompleteTodoList",
                      JSON.stringify([
                        ...incompletedList,
                        {
                          ...todo,
                          checked: true,
                          id: completedList.length + 1,
                        },
                      ])
                    );
                  }
                }}
              >
                {todo}
              </CheckBox>
            ))}
          </CompleteTodoList>
        </div>
        {bAdd && <AddTodo />}
        <button
          className="w-14 h-14 bg-[#515CC6] rounded-full mr-4 mb-2 self-end justify-items-end"
          onClick={(e) => setAdd(!bAdd)}
        >
          <img src="plus_icon.svg" alt="" />
        </button>
      </MainContainer>
    </BackGroundContainer>
  );
}

const BackGroundContainer = tw.div`
flex
justify-center
h-screen
items-center
bg-slate-300
`;

const MainContainer = tw.div`
  w-96
  h-[500px]
  flex
  flex-col
  p-6
  shadow-lg
  rounded-xl
  bg-white
  max-h-full	
`;

const HeaderContainer = tw.div`
  sticky
  top-0
`;

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
