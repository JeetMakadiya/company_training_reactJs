import "./TodoList.css";
import * as Icon from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { setTodoStatus, deleteTodoItem } from "../../Features/slices/todoSlice";

export const TodoList = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todo.todoItems);

  return (
    <ul className="todoList">
      {todoItems.map((item, index) => {
        return (
          <li className="todoItem" key={item.todoId}>
            <input
              type="checkbox"
              className="todoCheckbox"
              onClick={(event) => {
                dispatch(
                  setTodoStatus({
                    itemId: item.todoId,
                    itemStatus: event.target.checked,
                  })
                );
              }}
              checked={todoItems[index].todoStatus ? true : false}
            />
            <label>{item.todoTitle}</label>
            <Icon.Trash2
              size={18}
              className="todoDeleteIcon"
              onClick={() => {
                console.log("hello");
                dispatch(deleteTodoItem(item.todoId));
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};
