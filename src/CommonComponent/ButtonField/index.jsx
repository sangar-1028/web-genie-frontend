// import { Button, ConfigProvider } from "antd";
import React from "react";
import "./style.css";
const ButtonField = ({
  type,
  onClick,
  children,
  isLoading,
  buttonStyle,
  icon,
  iconPosition,
  disabled = false,
  onFocus,
  isFocus,
}) => {
  return (
      <button
        type={type}
        onClick={onClick}
        loading={isLoading}
        iconPosition={iconPosition ? iconPosition : null}
        className={disabled ? "custom-button" : buttonStyle}
        disabled={disabled}
        icon={icon ? icon : null}
        onFocus={onFocus}
        isFocus={isFocus}
        
      >
        {isLoading ? "Loading..." : children}
      </button>
  );
};

export default ButtonField;
