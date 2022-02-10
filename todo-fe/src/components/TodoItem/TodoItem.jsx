import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { todo, onClick } = props;

  const [completed, setCompleted] = useState(todo.completed);

  const completedHandle = () => {
    setCompleted(!completed);
    onClick(todo.id);
  };
  return (
    <div className="div-todo-item" onClick={completedHandle}>
      <div className="row-todo-item">
        <div className="circle-cover">
          <div className={`${todo.priority.toLowerCase()} circle`}></div>
        </div>
        <span className={completed ? "line" : ""}>{todo.task}</span>
      </div>
    </div>
  );
};

export default TodoItem;
