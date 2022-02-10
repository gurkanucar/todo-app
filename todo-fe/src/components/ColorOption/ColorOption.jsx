import React from "react";
import "./ColorOption.css";
const ColorOption = (props) => {
  const { onClick, icon, color, selected, tag } = props;

  return (
    <div
      className="color-btn-div"
      onClick={() => {
        onClick(tag);
      }}
    >
      <div
        style={{ backgroundColor: color }}
        className={selected ? "color-btn-selected" : "color-btn"}
      ></div>
    </div>
  );
};

export default ColorOption;
