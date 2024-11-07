import { Button } from "antd";
import React from "react";
import "./style.css";
const ButtonField = ({
  type,
  onClick,
  text,
  isLoading,
  buttonStyle,
  icon,
  iconPosition,
  disabled = false,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      loading={isLoading}
      iconPosition={iconPosition ? iconPosition : null}
      className={disabled ? "custom-button" : buttonStyle}
      disabled={disabled}
      icon={icon ? icon : null}
    >
      {isLoading ? "Loading..." : text}
    </Button>
  );
};

export default ButtonField;
