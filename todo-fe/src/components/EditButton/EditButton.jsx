import React from "react";
import "./EditButton.css";
export const EditButton = (props) => {
  const { onClick, icon, color, selected, tag } = props;

  return (
    <div
      className="edit-btn-div"
      onClick={() => {
        onClick(tag);
      }}
    >
      <div className={selected ? "edit-btn-selected" : "edit-btn"}>
        <i
          className="material-icons"
          style={color === undefined ? { color: "#444" } : { color: color }}
        >
          {icon && icon ? icon : "edit"}
        </i>
      </div>
    </div>
  );
};
