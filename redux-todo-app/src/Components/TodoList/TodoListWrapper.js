import "./TodoListWrapper.css";
import { TodoAddBtn } from "./TodoAddBtn";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { TodoDetails } from "./TodoDetails";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoData } from "../../Features/thunks/todoThunks";

export const TodoListWrapper = () => {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo);
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

  //function which return total todo
  let getTotalTodo = () => {
    return todoState.todoItems.length;
  };

  //function which return completed todo
  let getCompletedTodo = () => {
    return todoState.todoItems.filter((item) => item.todoStatus === true)
      .length;
  };
  useEffect(() => {
    dispatch(fetchTodoData());
  }, []);
  return (
    <div className="todoListWrapper">
      <TodoDetails totalTodo={getTotalTodo} completedTodo={getCompletedTodo} />
      {toggle === true ? (
        <TodoAddBtn handleToggle={handleToggle} />
      ) : (
        <TodoInput />
      )}
      {todoState.isLoading ? (
        <p>Loading...</p>
      ) : todoState.error === "" ? (
        <TodoList />
      ) : (
        <p>{todoState.error}</p>
      )}
    </div>
  );
};
