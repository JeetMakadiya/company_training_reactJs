import React from "react";
import TodoCard from "./TodoCard.js";
import "../styles/todo-section.css";

let TodoSection = () => {
  return (
    <section className="todo-section">
      <TodoCard />
    </section>
  );
};

export default TodoSection;
