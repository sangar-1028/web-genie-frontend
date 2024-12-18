import React, { useState } from "react";
import Input from "antd/es/input/Input";
import "./style.css";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { PASSWORD } from "../../utilies/helpers";
const InputField = ({
  type,
  maxRows,
  onChange,
  onBlur,
  onFocus,
  styleBox,
  placeholder,
  readOnly,
  required,
  disabled,
  inputLabel,
  inputLabelStyle,
  value,
  multiline,
  variant,
  isError,
  errorMessage,
  status,
  prefix
}) => {
  const [inputType, setInputType] = useState(type ? type : "text");
  const SettingOutlined = () => {
    return (
      <div
        className="passwordstyle"
        onClick={() =>
          setInputType(inputType === PASSWORD ? "text" : PASSWORD)
        }
      >
        {inputType === PASSWORD ? <LuEyeOff /> : <LuEye />}
      </div>
    );
  };
  return (
    <>
      <div className="mainContianer">
        {inputLabel && <div style={{ ...inputLabelStyle }}>{inputLabel}</div>}
        <Input
          placeholder={placeholder}
          
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          type={inputType}
          maxRows={maxRows}
          className={`custom-input ${styleBox}`}
          readOnly={readOnly}
          required={required}
          disabled={disabled}
          value={value}
          multiline={multiline}
          prefix ={prefix}
          variant={variant}
          suffix={type === PASSWORD && <SettingOutlined />}
          status={status}
        />
        {isError && <div className="errorStyle">{errorMessage}</div>}
      </div>
    </>
  );
};

export default InputField;
