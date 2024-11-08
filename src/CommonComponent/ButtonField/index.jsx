import { Button, ConfigProvider } from "antd";
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
  onFocus,
  isFocus,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "white",
          borderRadius: 2,
          colorBgContainer: "#d11ce9",
          
        },
      }}
    >
      <Button
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
        {isLoading ? "Loading..." : text}
      </Button>
    </ConfigProvider>
  );
};

export default ButtonField;
