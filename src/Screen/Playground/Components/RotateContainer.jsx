import React, { useState } from "react";
import "./style.scss";
import { BiMinus, BiPlus, BiRedo, BiUndo } from "react-icons/bi";
const RotateContainer = () => {
  const [value, setValue] = useState(0);

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
        <div className="rotateSignStyle">
          <BiUndo size={24} color="#7B7B7B" />
        </div>
        <div className="rotateSignStyle">
          <BiRedo size={24} color="#7B7B7B" />
        </div>
      </div>
      <div className="rotateValueContainer">
        <div onClick={() => onClickUupdateValue("add")}>
          <BiPlus size={24} color="#7B7B7B" />
        </div>
        <div>{value}%</div>
        <div onClick={() => onClickUupdateValue("minus")}>
          <BiMinus size={24} color="#7B7B7B" />
        </div>
      </div>
    </>
  );
};

export default RotateContainer;
