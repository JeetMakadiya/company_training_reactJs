import { useState } from "react";
import "./TodoInput.css";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../../Features/slices/todoSlice";

export const TodoInput = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  //input value handle function
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  //when Enter key is press then it is handle by this function
  const handleKeyDown = (event) => {
    let item = {
      todoId: new Date().getTime().toString(),
      todoTitle: inputText,
      todoStatus: false,
    };
    if (event.which === 13) {
      if (inputText !== "") {
        dispatch(addTodoItem(item));
        setInputText("");
      }
    }
  };
  return (
    <input
      type="text"
      className="todoInput"
      placeholder="write your todo here...."
      value={inputText}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
  );
};
