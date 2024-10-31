import { Button } from "antd";
import React from "react";
const ButtonField = ({ type, onClick, text, isLoading, buttonStyle, icon, iconPosition }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      loading={isLoading}
      iconPosition={iconPosition ? iconPosition : null}
      style={{ ...buttonStyle }}
      icon={icon ? icon : null}
    >
      {isLoading ? "Loading..." : text}
    </Button>
  );
};

export default ButtonField;
