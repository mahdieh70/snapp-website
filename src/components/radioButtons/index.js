import React from "react";

const RadioButtons = ({ changed, id, isSelected, label, value }) => {
  return (
    <>
      <input
        id={id}
        onChange={changed}
        value={value}
        type="radio"
        checked={isSelected}
        className="hidden align-middle"
      />
      <label htmlFor={id} className="radioButtonsStyle ">
        {label}
      </label>
    </>
  );
};

export default RadioButtons;
