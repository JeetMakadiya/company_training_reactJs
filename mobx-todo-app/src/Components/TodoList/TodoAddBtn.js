import * as Icon from "react-feather";
import "./TodoAddBtn.css";

export const TodoAddBtn = (props) => {
  const handleClick = () => {
    props.handleToggle();
  };

  return (
    <button className="addBtn" onClick={handleClick}>
      <span>Add Item</span>
      <Icon.Plus size={16} color="white" />
    </button>
  );
};
