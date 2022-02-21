import "./TodoDetails.css";

export const TodoDetails = ({ totalTodo, completedTodo }) => {
  return (
    <div className="todoDetails">
      <span>Total Todo : {totalTodo()}</span>
      <span>Completed Todo : {completedTodo()}</span>
    </div>
  );
};
