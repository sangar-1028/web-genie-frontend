import React, { useState } from "react";
import "./style.scss";
import { BiMinus, BiPlus, BiRedo, BiUndo } from "react-icons/bi";
const RotateContainer = () => {
  const [value, setValue] = useState(38);

  const onClickUupdateValue = (type) => {
    if (type === "add") {
      if (value < 100) {
        setValue(value + 1);
      }
    } else {
      if (value > 0) {
        setValue(value - 1);
      }
    }
  };
  return (
    <>
      <div className="rotateSignContainer">
        <button className="rotateSignStyle">
          <BiUndo size={24} color="#7B7B7B" />
        </button>
        <button className="rotateSignStyle">
          <BiRedo size={24} color="#7B7B7B" />
        </button>
      </div>
      <div className="rotateValueContainer">
        <button className="value-update-btn" onClick={() => onClickUupdateValue("add")}>
          <BiPlus size={16} color="#7B7B7B" />
        </button>
        <div>{value}%</div>
        <button className="value-update-btn" onClick={() => onClickUupdateValue("minus")}>
          <BiMinus size={16} color="#7B7B7B" />
        </button>
      </div>
    </>
  );
};

export default RotateContainer;
