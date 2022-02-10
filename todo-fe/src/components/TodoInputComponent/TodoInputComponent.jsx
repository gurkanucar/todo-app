import React, { useState } from "react";
import "./TodoInputComponent.css";

const TodoInputComponent = (props) => {
  const [input, setInput] = useState("");

  onchange = (e) => {
    //setInput(e.target.value);
    props.onSearch(e.target.value);
  };

  return (
    <div>
      <div className="div-todo-input">
        <div className="row-todo-input">
          <i className="material-icons">search</i>
          <input
            onKeyDown={props.onKeyDown}
            onChange={(e) => onchange(e)}
            type="text"
            className="input-todo-input"
            placeholder=" task..."
          />
        </div>
      </div>
      <div className="todo-input-hint">
        <i className="material-icons">add</i>
        Press enter to add
      </div>
    </div>
  );
};

export default TodoInputComponent;
