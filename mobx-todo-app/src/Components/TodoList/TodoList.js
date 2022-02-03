import "./TodoList.css";
import * as Icon from "react-feather";
import { todoStore } from "../../Store/todoStore";
import { observer } from "mobx-react";

export const TodoList = observer(() => {
  return (
    <ul className="todoList">
      {todoStore.todoItems.map((item) => {
        return (
          <li className="todoItem" key={item.todoId}>
            <input
              type="checkbox"
              id={item.todoId}
              className="todoCheckbox"
              onClick={(event) => {
                todoStore.setTodoStatus(item.todoId, event.target.checked);
              }}
            />
            <label>{item.todoTitle}</label>
            <Icon.Trash2
              size={18}
              className="todoDeleteIcon"
              onClick={() => {
                todoStore.deleteTodoItem(item.todoId);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
});
