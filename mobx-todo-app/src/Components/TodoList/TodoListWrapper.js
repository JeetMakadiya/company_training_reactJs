import "./TodoListWrapper.css";
import { TodoAddBtn } from "./TodoAddBtn";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { TodoDetails } from "./TodoDetails";
import { useState } from "react";
import { observer } from "mobx-react";

export const TodoListWrapper = observer(() => {
  //toggle = true or false ##if toggle = true then <TodoAddBtn/> is shown else <TodoInput/> is shown
  const [toggle, setToggle] = useState(true);

  //handleToggle method to toggle <TodoAddBtn/> & <TodoInput/>
  const handleToggle = () => {
    setToggle(false);
  };

  //when ESC key pressed than <TodoInput/> is disappear and <TodoAddBtn/> is shown.
  document.addEventListener("keydown", (event) => {
    if (event.which === 27) {
      setToggle(true);
    }
  });

  return (
    <div className="todoListWrapper">
      <TodoDetails />
      {toggle === true ? (
        <TodoAddBtn handleToggle={handleToggle} />
      ) : (
        <TodoInput />
      )}
      <TodoList />
    </div>
  );
});
