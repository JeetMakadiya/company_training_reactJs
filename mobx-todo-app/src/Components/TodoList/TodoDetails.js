import "./TodoDetails.css";
import { todoStore } from "../../Store/todoStore";
import { observer } from "mobx-react";

export const TodoDetails = observer(() => {
  return (
    <div className="todoDetails">
      <span>Total Todo : {todoStore.totalTodo}</span>
      <span>Completed Todo : {todoStore.completedTodo}</span>
    </div>
  );
});
